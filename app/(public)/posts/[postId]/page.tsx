import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/app/models/IPost";
import {Post} from "@/app/components/Post";
export default async function PostPage({searchParams}:{searchParams:Promise<SearchParams>}) {
    const {data} = await searchParams;
    const post = typeof(data) === 'string' ? JSON.parse(data) as IPost : null;
    return <>
        {post && (
            <div>
                <Post post={post} />
            </div>
            )
        }
    </>
}