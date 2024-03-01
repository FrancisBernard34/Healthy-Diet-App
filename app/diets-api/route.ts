import { connectToDb } from "@/utils/db";
import { DietModel } from "@/models/diet";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic";

type UserEmail = String;

export async function POST(request: NextRequest, response: NextResponse) {
  const session = await getToken({
    req: request,
    secret: process.env.SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith("https://") ??
      !!process.env.VERCEL_URL,
  });

  console.log(session);

  if (!session) {
    return new Response(JSON.stringify({ error: "Usuário não autenticado" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const db = await connectToDb();
    const diets = request.json();

    DietModel.insertMany(diets);

    return new Response(
      JSON.stringify({ success: "Dieta criada com sucesso" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Erro ao criar dieta" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const session = await getToken({
      req: request,
      secret: process.env.SECRET,
      secureCookie:
        process.env.NEXTAUTH_URL?.startsWith("https://") ??
        !!process.env.VERCEL_URL,
    });

    const db = await connectToDb();

    const user = db
      .model("users")
      .findOne({ email: (session?.email as UserEmail) });

    if (user) {
      console.log(user)
    }

    const diets = await DietModel.find().sort({ dayId: "asc" });

    return new Response(JSON.stringify({ diets }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Erro ao buscar dietas" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
