import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/app/models/IComment";
import {Comment} from "@/app/components/Comment";

export default async function CommentPage({searchParams}: {
    searchParams: Promise<SearchParams>
}) {
    const {data} = await searchParams;
    const comment = typeof (data) === "string" ? JSON.parse(data) as IComment : null;
    return <>
        {comment &&
            (<Comment comment={comment}/>)}
    </>
}
