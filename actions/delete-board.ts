"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z} from "zod"


// const De = z.object({
//     title: z.string(),
// })

export async function deleteBoard(id: string){
    // const {title} = CreateBoard.parse({
    //     title: formData.get("title"),
    // })

    await db.board.delete({
        where: {
            id
        }

    })

    revalidatePath("/organization/org_2eE88DMQhj9ImV8Ayojx57FcdwA")
  
}