'use client';

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { List } from "@/components/List";
import { useGithub } from "@/context/github.context";
import { useState } from "react";


const Home = () => {
    const { handleGetUser, listUser } = useGithub();
    const [inputValue, setInputValue] = useState<string>('');

    const handleClick = () => {
        handleGetUser(inputValue)
    }


    return (
        <div className="container mx-auto">
            <div className='flex mt-5' data-testid="aqui">
                <Input setValue={setInputValue} />
                <Button handleClick={handleClick} title="Buscar" />
            </div>

            {listUser.map((item) => (
                // <React.Fragment key={item.id}>
                <List key={item.id} username={item.login} fullName={item.name} url={item.avatar_url} />
                // </React.Fragment>
            ))}
        </div>




    )
}

export default Home;