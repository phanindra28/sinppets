"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetFormProps {
  snippet: Snippet;
}
export default function ({ snippet }: SnippetFormProps) {
  const [code, setCode] = useState<string>();
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height={"40vh"}
        theme={"vs-dark"}
        language={"javascript"}
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={(value = "") => {
          setCode(value);
        }}
      />
      <form action={editSnippetAction}>
        <button type={"submit"} className={"p-2 border rounded"}>
          Save
        </button>
      </form>
    </div>
  );
  // </div>
}
