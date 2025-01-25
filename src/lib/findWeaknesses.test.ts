import { findWeaknesses } from './findWeaknesses';
import {PokemonType} from "../interfaces";

describe('findWeaknesses', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and returns weaknesses for given types', async () => {
        const mockTypeResponse = {
            damage_relations: {
                double_damage_from: [{ name: 'fire' }, { name: 'flying' }],
            },
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockTypeResponse),
            })
        ) as jest.Mock;

        const types = [{ type: { name: 'grass' } }];
        const weaknesses = await findWeaknesses(types as PokemonType[]);

        expect(weaknesses).toEqual(['fire', 'flying']);
    });

    it('handles fetch error', async () => {
        global.fetch = jest.fn(() => Promise.reject('API is down')) as jest.Mock;

        console.error = jest.fn();

        const types = [{ type: { name: 'grass' } }];
        const weaknesses = await findWeaknesses(types as PokemonType[]);

        expect(weaknesses).toEqual([]);
        expect(console.error).toHaveBeenCalledWith('Error fetching type data', 'API is down');
    });
});