'use client';

import { GithubProvider } from "./github.context"

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {

    return (
        <GithubProvider>
            {children}
        </GithubProvider>
    )
}

export { GlobalProviders }