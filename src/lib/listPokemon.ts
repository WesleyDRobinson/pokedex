import {ListPokemonResponse} from "../interfaces";

export const listPokemon = async ({url}: { url?: string; } = {}): Promise<ListPokemonResponse | unknown> => {
    // Uncomment to simulate slow network (600 ms)
    // await new Promise(resolve => setTimeout(resolve, 600))

    // default to starting pokemon list endpoint
    if (!url) url = 'https://pokeapi.co/api/v2/pokemon'

    try {
        const res = await fetch(url);
        const pokemon = await res.json();

        if (pokemon) {
            return pokemon
        }
    } catch (e) {
        console.error('Error fetching pokemon', e)
    }
}
