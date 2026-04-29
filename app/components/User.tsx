import type {FC} from "react";
import {IUser} from "@/app/models/IUser";

type UserPropsType = {
    user: IUser;
}
export const User: FC<UserPropsType> = ({user}: UserPropsType) => {
    return (
        <div className={'bg-purple-300 p-4 rounded-2xl'}>
            <p>{user.id}. {user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};