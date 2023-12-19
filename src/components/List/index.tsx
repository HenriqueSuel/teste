import Link from "next/link";
import { setCookie } from "cookies-next";

import { useRouter } from 'next/navigation'

interface Props {
    fullName: string;
    url: string;
    username: string;
}

const List = ({ fullName, url, username }: Props) => {
    const router = useRouter();
    

    const handleClick = () => {
        setCookie('username', username);
        router.push(`/repo/${username}`);
    }


    return (
        <div data-testid="" onClick={handleClick} className="flex items-center border-4 p-5 mt-5" >
            <img src={url} alt="foto da pessoa" className="rounded-full w-32" />
            <h1 className="ml-5 text-2xl">
                {fullName}
            </h1>
        </div>

    )
}

export { List }