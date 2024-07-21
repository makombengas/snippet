import { notFound } from "next/navigation"

import { db } from "@/db"
import SnippetEditForm from "@/components/snippetEditForm/SnippetEditForm"


interface SnippetEditPageProps {
    params: {
        id: string
    }
}

const SnippetEditPage = async (props: SnippetEditPageProps) => {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: {
            id
        }
    });

    if(!snippet) {  
        notFound();
    }
  return (
    <div>
        <SnippetEditForm snippet={snippet} />
    </div>
  )
}

export default SnippetEditPage