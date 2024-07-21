import Link from "next/link"



const SnippetNotFound = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col gap-8'>
        <h1 className="text-red-500 text-xl bold ">
            Soory but we {"couldn't"} find that particular snippet
        </h1>
        <Link className="bg-blue-200 rounded p-2 " href={"/"}>Back to Home</Link>
    </div>
  )
}

export default SnippetNotFound 