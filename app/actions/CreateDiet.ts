"use server";
import "dotenv/config";
import { DietModel } from "../../models/diet";
import { UserModel } from "../../models/user";
import { connectToDb } from "../../utils/db";
import { api } from "../../utils/axios";
import { AxiosResponse } from "axios";

type prevState = any;
type formData = FormData | undefined;

export default async function createDiet(
  prevState: prevState,
  formData: formData
) {
  const rawFormData = {
    dietShortDescription: formData?.get("dietShortDescription"),
    dietLongDescription: formData?.get("dietLongDescription"),
    day: formData?.get("day"),
    dayId: formData?.get("dayId"),
    userEmail: formData?.get("userEmail"),
    userId: undefined,
    formToken: process.env.FORM_TOKEN
  };

  try {
    await connectToDb();

    const user = await UserModel.findOne({ email: rawFormData.userEmail });
    const existingDiet = await DietModel.findOne({
      dayId: rawFormData.dayId,
      user: user,
    });

    rawFormData.userId = user?._id;

    let result: AxiosResponse;

    if (existingDiet) {
      const formDataWithExistingDietId = { ...rawFormData, existingDietId: existingDiet._id };
      result = await api.put("/diets-api", JSON.stringify(formDataWithExistingDietId), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      result = await api.post("/diets-api", JSON.stringify(rawFormData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return {
      message: result.data.success || result.data.error,
    };
  } catch (e) {
    console.error(e);
    return {
      message: "Erro ao atualizar dieta",
    };
  }
}
