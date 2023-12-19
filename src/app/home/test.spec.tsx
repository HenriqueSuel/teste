// Home.test.jsx
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Home from '@/app/home/page'
import { mockGithubContext } from '@/utils/test.utils'; ``

const push = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push,
    }),
}));


describe('Home Component', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('deve renderizar corretamente', () => {
        mockGithubContext();
        const { container, getByText, getByTestId } = render(<Home />);

        expect(container.firstChild).toMatchSnapshot();
        expect(getByText('Buscar')).toBeTruthy();
        expect(getByTestId('aqui')).toBeTruthy();
    });

    it('deve chamar handleGetUser ao clicar no botão', async () => {
        const handleGetUser = jest.fn();
        mockGithubContext({ handleGetUser })

        const { getByText } = render(<Home />);
        fireEvent.click(getByText('Buscar'));

        await waitFor(() => {
            expect(handleGetUser).toHaveBeenCalled();
        });
    });

    it('deve exibir a lista de usuários', () => {
        const listUser = [
            { id: 1, login: 'user1', name: 'User 1', avatar_url: 'url1' },
            { id: 2, login: 'user2', name: 'User 2', avatar_url: 'url2' },
        ];

        mockGithubContext({ listUser });

        const { getByText } = render(<Home />);

        listUser.forEach((user) => {
            expect(getByText(user.name)).toBeTruthy();
            expect(getByText('Buscar')).toBeTruthy();
        });

        fireEvent.click(getByText(listUser[0].name));

        expect(push).toHaveBeenCalledWith('/repo/user1')
    });
});
