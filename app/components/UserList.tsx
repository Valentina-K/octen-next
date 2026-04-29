import {IUser} from "@/app/models/IUser";
import {getData} from "@/app/services/service.api";
import Link from "next/link";


export const UserList = async () => {
    const users = await getData<IUser[]>({endpoint: "/users"})

    return (
        <>{users.map((user: IUser) =>
            <Link href={{pathname:'/users/'+user.id, query: {data:JSON.stringify(user)}}} key={user.id}>
                <h1 className={'text-2xl'}>{user.id}. {user.name}</h1>
            </Link>)
        }
        </>
    );
};