import { IRepo } from "@/interface/repo.interface";
import { getApi } from "@/services/api.services";
import { cookies } from 'next/headers'
 

const Repo = async () => {
    const cookieStore = cookies()
    const username = cookieStore.get('username')

    const resp = await getApi<IRepo[]>(`https://api.github.com/users/${username?.value}/repos`)

    const listRepo = resp.data;

    return (
        <div className="container mx-auto">
            {listRepo.map((repo, index) => (
                <div key={index} className="flex items-center border-4 p-5 mt-5" >
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                            {repo.name.slice(0, 2)}
                        </span>
                    </div>
                    <h1 className="ml-5 text-2xl">
                        {repo.name}
                    </h1>
                </div>

            ))}
        </div>
    )
}

export default Repo;