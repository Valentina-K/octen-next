import {getData} from "@/app/services/service.api";
import Link from "next/link";
import {IPost} from "@/app/models/IPost";


export const PostList = async () => {
    const posts = await getData<IPost[]>({endpoint: "/posts"})

    return (
        <>{posts.map((post: IPost) =>
            <Link href={{pathname:'/posts/'+post.id, query: {data:JSON.stringify(post)}}} key={post.id}>
                <p className={'text-2xl'}><b>{post.id}.</b> {post.title}</p>
            </Link>)
        }
        </>
    );
};