import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/app/models/IUser";
import {User} from "@/app/components/User";

export default async function UserPage({searchParams}: {
    searchParams: Promise<SearchParams>
}) {
    const {data} = await searchParams;
    const user = typeof (data) === 'string' ? JSON.parse(data) as IUser : null;

    return (
        <>
            {user && (
                <User user={user}/>)
            }
        </>
    )
}