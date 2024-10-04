import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/actions";

export default async function SnippetShowPage(props: {
  params: { id: string };
}) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className={"flex m-4 justify-between items-center"}>
        <h1 className={"text-xl font-bold"}>{snippet.title}</h1>
        <div className={"flex gap-4"}>
          <Link href={`/snippets/${snippet.id}/edit`}>
            <button className={"p-2 border rounded"}> Edit</button>
          </Link>
          <form action={deleteSnippet.bind(null, snippet.id)}>
            <button className={"p-2 border rounded"}>Delete</button>
          </form>
        </div>
      </div>
      <pre className={"p-3 border rounded bg-gray-200 border-gray-200"}>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams(){
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }))
}