import { useGithub, IGithub } from '@/context/github.context';



export const mockGithubContext = (github?: Partial<IGithub>): void => {
    const mockUseGithub = useGithub as jest.MockedFunction<() => IGithub>;
    mockUseGithub.mockReturnValueOnce(({
        handleGetUser: jest.fn(),
        listUser: [],
        ...github,
    }));
};


