import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interface/user.interface";
import { getApi } from "../services/api.services";

export interface IGithub {
    listUser: IUser[];
    // setListUser: React.Dispatch<React.SetStateAction<IUser[]>>;
    handleGetUser: (username: string) => void;
}

const githubContextDefault = {
    listUser: [],
    // setListUser: () => null,
    handleGetUser: () => null,
};

const GithubContext = createContext<IGithub>(githubContextDefault);

interface IProvider {
    children: React.ReactNode
}

const GithubProvider = ({ children }: IProvider) => {
/* 
    const { setIsLoading } = useLoading(); */
    const [listUser, setListUser] = useState<IUser[]>([]);


    const handleGetUser = async (username: string) => {
/*         setIsLoading(true) */
        const resp = await getApi<IUser>(`https://api.github.com/users/${username}`)

        setListUser((previous) => [...previous, resp.data])
        localStorage.setItem('user', JSON.stringify([...listUser, resp.data]));
    /*     setIsLoading(false) */
    }

    useEffect(() => {
        const usersJSON = localStorage.getItem('user');
        const users = usersJSON ? JSON.parse(usersJSON) : null;
        if (users) {
            setListUser(users);
        }
    }, [])

    return (
        <GithubContext.Provider value={{
            listUser,
            handleGetUser
        }}>
            {children}
        </GithubContext.Provider>
    )
}

const useGithub = () => useContext(GithubContext);

export { useGithub, GithubProvider }