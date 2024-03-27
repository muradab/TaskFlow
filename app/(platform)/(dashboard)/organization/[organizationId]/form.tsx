"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export  const Form = ()=>{

    const initialState = {message:null, error:{}}
    const [state, dispatch] = useFormState(create, initialState)


    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">

            
        <input 
        type="text"  
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"

        
        />
        {state?.error?.title ? (
            <div>
                {state?.error?.title}
            </div>
        ):null}
        </div>
        <Button type="submit">
            Submit

        </Button>
        </form>
    )
}