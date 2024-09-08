"use server";
import { revalidateTag } from "next/cache";
const url = process.env.NEXT_PUBLIC_APP_URL;

export type InputType = {
    title: string;      
    description: string; 
    id: number;         
  };
export const createTodo = async (formData:InputType ) =>{
    try {
        const res = await fetch(`${url}/todos`,{method: "POST", body: JSON.stringify(formData), headers: {"Content-Type" : "application/json"}})
        const data = await res.json();
        return data
        
      } catch (error) {
        const err = (error as Error).message
        
        throw new Error(err)
      }finally{
        revalidateTag("todos")
      }
}