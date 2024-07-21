import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany({})
  const renderedSnippets = snippets.map(snippet => {
    return (
      <Link 
      href={`/snippets/${snippet.id}`} 
      key={snippet.id}
      className="flex justify-between items-center p-2 border rounded hover:bg-gray-700 hover:text-gray-200 transition-colors duration-500 "
      
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    )
  })
  return (
    <div className=" flex flex-col">
      
          <div className="flex justify-between items-center m-2">
              <h1 className="text-xl font-bold text-center ">Snippets</h1>
              <Link href="/snippets/new" className="bg-blue-200 rounded p-2 hover:bg-gray-700 hover:text-gray-200 transition-colors duration-500 ">Create new snippet</Link>
          </div>

          <div className="flex flex-col gap-2">
              {renderedSnippets}
          </div>
    </div>
  );
}
