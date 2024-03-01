"use server";
export default async function createDiet(formData: FormData) {
  const rawFormData = {
    dietShortDescription: formData.get("dietShortDescription"),
    dietLongDescription: formData.get("dietLongDescription"),
    day: formData.get("day"),
  };

  // Aqui você pode adicionar a lógica para mutar os dados e revalidar o cache
  // Por exemplo, enviar os dados para uma API ou banco de dados

  console.log(rawFormData); // Exemplo de log para verificar os dados
}