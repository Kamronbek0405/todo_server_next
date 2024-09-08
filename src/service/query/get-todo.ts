"use server";
const url = "http://localhost:3600";


export type ObjectType = {
  title: string;      
  description: string; 
  id: number;         
};

export const getData = async ():Promise<ObjectType[]> =>{
  try {
    const res = await fetch(`${url}/todos`, {next:{tags:["todos"]}})
    const data = await res.json();
    return data
    
  } catch (error) {
    const err = (error as Error).message
    
    throw new Error(err)
  }

}

