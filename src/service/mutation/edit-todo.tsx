"use server";
import { revalidateTag } from "next/cache";
const url = process.env.APP_URL;

export type InputType = {
    title: string;      
    description: string; 
    id: number;         
};

export const editItem = async (id: number, updatedData: InputType) => {
  try {
    const res = await fetch(`${url}/todos/${id}`, {
      method: "PUT", // PUT yoki PATCH usulidan foydalanish
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Yangilangan ma'lumotlarni JSON formatida yuborish
    });

    if (!res.ok) {
      throw new Error(`Xatolik yuz berdi: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    const err = (error as Error).message;
    throw new Error(err);
  } finally {
    revalidateTag("todos"); // Ma'lumotlar o'zgartirilgandan so'ng keshni qayta tasdiqlash
  }
};
