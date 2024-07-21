import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from '@/actions';
interface SnippetsShowPageProps {
    params: {
        id: string
    }
}
const SnippetShowPage = async (props: SnippetsShowPageProps) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    })
    if (!snippet) {
        notFound()
    }
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
  return (
    <div>
       <div className="flex mt-4 justify-between items-center flex-wrap">
             <h1 className="text-xl font-bold text-center mb-5 ">{snippet.title}</h1>
       <div className="flex items-center">
            <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded-tl-lg hover:bg-gray-950 hover:text-slate-200 bg-blue-200 transition-colors duration-500">Edit</Link>
            <form action={deleteSnippetAction}>
                <button className="p-2 border rounded-tr-lg  bg-red-200">Delete</button>
            </form>
       </div>
       </div>


       <pre className="p-3 rounded-tl-lg border rounded-bl-lg rounded-br-lg  bg-gray-200 border-gray-200 ">
           <code>{snippet.code}</code>
       </pre>
       <div className="mt-8 w-full">
       <Link href="/" className=" float-end p-2 border rounded hover:bg-blue-200 text-gray-200  hover:text-gray-900 bg-gray-900 transition-colors duration-500">return to home</Link>
       </div>
    </div>
  )
}

export default SnippetShowPage 