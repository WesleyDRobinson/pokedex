import {PokemonType} from "../interfaces";

export const findWeaknesses = async (types: Partial<PokemonType>[]): Promise<string[]> => {
    try {

        const typePromises = types?.map(async (type) => {
            const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type?.type?.name}`);
            const typeData: PokemonType = await typeResponse.json();
            return typeData.damage_relations?.double_damage_from?.map((d) => d.name);
        });

        // Wait for all type requests to resolve
        const weaknessesResults = await Promise.all(typePromises);

        // return the combined weaknesses from all types
        return Array.from(new Set(weaknessesResults.flat()));
    } catch (e) {
        console.error('Error fetching type data', e);
        return [];
    }
}
