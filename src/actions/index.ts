'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";
// argument´s if you want to call a snippet from the server you have to call a id number
export async function EditSnippet (id: number, code: string) {
   
     await db.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    })

    redirect(`/snippets/${id}`)
      
}

export async function deleteSnippet (id: number) {
    await db.snippet.delete({
        where: {
            id
        }
    });
    redirect("/");
} 


export async function createSnippet(formState: { message: string}, formData: FormData) {

   try {
    // This needs to be a server action!

    // check the user's inputs and make sure they're valid

    const title = formData.get('title'); 
    const code = formData.get('code') ;

    if(typeof title !== "string" || title.length <3) {
        return {
            message: 'Title must be longer '
        }
    }
    if(typeof code  !== "string" || code.length < 10) {
        return {
            message: ' Code must be longer '
        }
    }

    // create a new records in the database
   await db.snippet.create({
      data: {
        title,
        code,
      }
    })


}
catch (err:unknown) {
   if(err instanceof Error) {
    return {
        message: err.message
    }
   }else  {
    return {
        message: "something went wrong..."
    }
   }
}

redirect("/")

    // Redirect the user back to the Root route
  
    
  } 