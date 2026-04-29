import {IComment} from "@/app/models/IComment";
import {FC} from "react";

type CommentProps = {
    comment: IComment;
}
export const Comment:FC<CommentProps> = ({comment}: CommentProps) => {
    return (
        <div className={'bg-purple-300 p-4 rounded-2xl'}>
            <p className={'text-2xl'}><b>{comment.id}.</b> {comment.name}</p>
            <p>{comment.body}</p>
            <p><i>Id of the post:</i> {comment.postId}</p>
            <p>{comment.email}</p>
        </div>
    );
};