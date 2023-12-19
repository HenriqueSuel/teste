
import Link from "next/link";
import { Loading } from "../Loading";

const NavBar = () => {
    const isLoading = false;

    return (
        <div className="bg-sky-500 p-5 shadow-lg flex justify-between">

            <h1>Blog Henrique</h1>

            <ul className="flex gap-5">
               <Link href="/">Home</Link>
                <Link href="/repo/henriquesuel">Repo</Link>
               
            </ul>
            <Loading loading={isLoading} nameScreen="NavBar" />



        </div>
    )
}


export { NavBar };