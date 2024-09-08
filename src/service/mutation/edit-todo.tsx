"use server";
import { revalidateTag } from "next/cache";
const url = "http://localhost:3600";

export type InputType = {
    title: string;      
    description: string; 
    id: number;         
};

export const editItem = async (id: number, updatedData: InputType) => {
  try {
    const res = await fetch(`${url}/todos/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), 
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
    revalidateTag("todos"); 
  }
};
