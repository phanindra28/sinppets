import {db} from "@/db";
import {notFound} from "next/navigation";

export default async function SnippetShowPage(props: {params: {id: string}}) {
    // await new Promise((r) => setTimeout(r, 2000))
    const snippet = await db.snippet.findFirst({
        where:  {id: +props.params.id}
    })
    if(!snippet){
        return notFound();
    }
    return <div>
        {snippet.title}
        {snippet.code}
    </div>
}