
"use client";
import type { Snippet } from "@prisma/client";
import {Editor} from '@monaco-editor/react';
import { useState } from "react";
import async from './../../app/page';
import * as actions from '@/actions';
import Link from "next/link";

interface SnippetEditFormProps {
    snippet: Snippet;
}
const SnippetEditForm = ({snippet}: SnippetEditFormProps) => {
    const [code, setCode ] = useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
        if(!value) return;
        console.log(value);
    }

    const editSnippetAction = actions.EditSnippet.bind(null, snippet.id, code,);


  return (
    <div className="mt-4">
    <Editor
    height="40vh"
    theme="vs-dark"
    language="javascript"
    // defaultLanguage="javascript"
    defaultValue={snippet.code}
    options={{
        minimap: {enabled: false},
        wordWrap: 'on'
    }}
    onChange={handleEditorChange}
    />

    <form action={editSnippetAction} className="mt-4 w-full flex justify-between items-center">
        <button type="submit" className="p-2 border rounded hover:bg-gray-950 hover:text-slate-200 bg-blue-200 transition-colors duration-500">Save</button>
        <Link className="mt-2 text-center border hover:bg-red-200 p-2 hover:border rounded transition-colors duration-500" href={"/"}>
            <button>Cancel</button>
        </Link>
    </form>

    </div>
  )
}

export default SnippetEditForm