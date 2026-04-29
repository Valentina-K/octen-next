import {getData} from "@/app/services/service.api";
import {IComment} from "@/app/models/IComment";
import Link from "next/link";

export const CommentList = async () => {
    const comments = await getData<IComment[]>({endpoint: "/comments"});
    return (
        <>{comments.map((comment: IComment) =>
            <Link href={{pathname: '/comments/' + comment.id, query: {data: JSON.stringify(comment)}}} key={comment.id}>
                <p className={'text-2xl'}><b>{comment.id}.</b> {comment.name}</p>
            </Link>)
        }
        </>
    );
};