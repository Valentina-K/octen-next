import {IPost} from "@/app/models/IPost";
import {FC} from "react";

type PostPropsType = {
    post: IPost;
}
export const Post: FC<PostPropsType> = ({post}: PostPropsType) => {
    return (
        <div className={'bg-purple-300 p-4 rounded-2xl'}>
            <p className={'text-2xl'}><b>{post.id}.</b> {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};