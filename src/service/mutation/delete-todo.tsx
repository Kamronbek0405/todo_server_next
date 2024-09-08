"use server";
import { revalidateTag } from "next/cache";
const url = "http://localhost:3600";

export type InputType = {
    title: string;      
    description: string; 
    id: number;         
  };

export const deleteItem = async (id:number) =>{
    try {
        const res = await fetch(`${url}/todos/${id}`,{method: "DELETE"})
        const data = await res.json();
        return data
        
      } catch (error) {
        const err = (error as Error).message
        
        throw new Error(err)
      }finally{
        revalidateTag("todos")
      }
}


