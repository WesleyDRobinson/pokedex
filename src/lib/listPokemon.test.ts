import {listPokemon} from './listPokemon';

jest.mock('../hooks/usePokeStore');

describe('listPokemon', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and returns pokemon list', async () => {
        const mockResponse = {
            count: 2,
            next: "next-url",
            results: [{name: "bulbasaur"}, {name: "ivysaur"}]
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            })
        ) as jest.Mock;

        const results = await listPokemon();

        expect(results).toEqual(mockResponse);
    });

    it('handles fetch error', async () => {
        global.fetch = jest.fn(() => Promise.reject('API is down')) as jest.Mock;

        console.error = jest.fn();

        const results = await listPokemon();

        expect(results).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith('Error fetching pokemon', 'API is down');
    });
});
