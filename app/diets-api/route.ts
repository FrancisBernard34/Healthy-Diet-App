import { connectToDb } from "../../utils/db";
import { DietModel } from "../../models/diet";
import { UserModel } from "../../models/user";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectToDb();

    const data = JSON.parse(await new Response(request.body).text());

    if (data.formToken !== process.env.FORM_TOKEN) {
      return new Response(
        JSON.stringify({ error: "Não autorizado" }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    DietModel.create({
      day: data.day,
      dayId: data.dayId,
      shortDescription: data.dietShortDescription,
      fullDescription: data.dietLongDescription,
      user: data.userId,
    });

    return new Response(JSON.stringify({ success: "Dieta criada!" }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ error: "Erro ao criar dieta. Tente novamente." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectToDb();

    const user = await UserModel.findOne({
      email: request.nextUrl.searchParams.get("userEmail"),
    });

    const diets = await DietModel.find({ user: user?._id }).sort({
      dayId: "asc",
    });

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

export async function PUT(request: NextRequest, response: NextResponse) {
  try {
    await connectToDb();

    const data = JSON.parse(await new Response(request.body).text());

    await DietModel.findOneAndUpdate(
      { _id: data.existingDietId },
      {
        day: data.day,
        dayId: data.dayId,
        shortDescription: data.dietShortDescription,
        fullDescription: data.dietLongDescription,
        user: data.userId,
      },
      { new: true }
    );

    return new Response(JSON.stringify({ success: "Dieta atualizada!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ error: "Erro ao atualizar dieta. Tente novamente." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
