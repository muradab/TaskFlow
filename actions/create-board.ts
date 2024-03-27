"use server";

import { db } from "@/lib/db";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import { z} from "zod"


const CreateBoard = z.object({
    title: z.string().min(3,{
        message:'minimum message length should exceed 3'
    }),
})

export type State = {
    errors ?:{
        title?: string[];
    }
    message?: string |null;
}

export async function create(prevState:State, formData: FormData){
    const validateFields = CreateBoard.safeParse({
        title: formData.get("title"),
    })

    if(!validateFields.success){
        return {
            error:validateFields.error.flatten().fieldErrors,
            message:"Missing fields"
        }
    }

    const {title} = validateFields.data;

    try{await db.board.create({
        data: {
            title
        }

    })}
    catch(error){
        return{
            message: "Database Error"
        }
    }

    revalidatePath("/organization/org_2eE88DMQhj9ImV8Ayojx57FcdwA")
    redirect("/organization/org_2eE88DMQhj9ImV8Ayojx57FcdwA")
  
}