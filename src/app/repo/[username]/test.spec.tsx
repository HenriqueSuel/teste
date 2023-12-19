// Repo.test.tsx
import { render, waitFor } from '@testing-library/react';
import Repo from '@/app/repo/[username]/page'; // Substitua pelo caminho correto
import * as API from '@/services/api.services';
import { AxiosRequestHeaders } from 'axios';

jest.mock('@/services/api.services');
jest.mock('next/headers', () => ({
    cookies: () => ({
        get: jest.fn()
    })
}))

describe('Repo Component', () => {
    test('deve renderizar os repositórios corretamente', async () => {
        jest.spyOn(API, 'getApi').mockResolvedValue({
            data: [{
                name: 'HenriqueSuel'
            }],
            status: 200,
            statusText: '200',
            headers: {},
            config: {
                headers: {} as AxiosRequestHeaders
            }
        })

        const Resolved = await Repo();
        const { getByText } = render(Resolved);

        // Aguarda a resolução da promessa
        await waitFor(() => {
            expect(getByText('HenriqueSuel')).toBeTruthy();
        });
    });

    // Adicione mais testes conforme necessário
});
