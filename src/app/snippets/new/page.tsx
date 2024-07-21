"use client"

import { useFormState } from "react-dom";
import Link from "next/link";
import * as actions from '@/actions';
const SnippetsCreatePage = () => {

const [formState, action] = useFormState(actions.createSnippet,  {message:""} );
  return (
    <form action={action} >
      <h3 className="m-3 text-2xl text-center font-bold ">Create a snippet</h3>

      <div className="flex flex-col gap-4">
         {/* your title */}
          <div className="flex gap-4">
            <label  className="w-12" htmlFor="title">Title</label>
            <input 
              className="border rounded p-2 w-full" 
              id="title" 
              name="title" 
              placeholder="Type your title here" />
          </div>
          {/* your code  */}
          <div className="flex gap-4">
            <label  className="w-12" htmlFor="code">Code</label>
            <textarea            className="border rounded p-2 w-full h-[25rem]" 
              id="code" 
              name="code" 
              placeholder="Type your code here " />
          </div>
        { formState.message &&<div className="w-full bg-red-200 p-2 text-center border border-red-400 rounded ">
              {formState.message}
          </div>}
         <div className="flex justify-between items-center">
            <button className=" rounded p-2 bg-blue-200 hover:bg-gray-700 hover:text-gray-200 transition-colors duration-500" type="submit">Create your snippet</button>
            <Link className="mt-2 text-center border hover:bg-red-200 p-2 hover:border rounded transition-colors duration-500" href={"/"}>Cancel</Link>
         </div>
      </div>
    </form>
  )
}

export default SnippetsCreatePage