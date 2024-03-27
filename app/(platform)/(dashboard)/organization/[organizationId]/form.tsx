"use client"

import { createBoard} from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action"

export  const Form = ()=>{
    const {execute, fieldErrors} = useAction(createBoard,
        {onSuccess:(data)=>{
            console.log(data, 'SUCCESS')
        },
        onError:(error)=>{
            console.log(error)
        }})


    const onSubmit = (formdata:FormData)=>{
        const title = formdata.get('title') as string;
        execute({title})
    }

    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">

            
        <input 
        type="text"  
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"

        
        />
        {fieldErrors?.title}
        </div>
        <Button type="submit">
            Submit

        </Button>
        </form>
    )
}