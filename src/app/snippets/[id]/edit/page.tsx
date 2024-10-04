import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

export default async function EditSnippet(props: { params: { id: string } }) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
