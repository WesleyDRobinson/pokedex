import {listPokemon} from "./listPokemon.ts";
import {Character, EvolutionChainResponse, ListPokemonResponse} from "../interfaces";
import {usePokeStore} from "../hooks/usePokeStore.tsx";
import {findWeaknesses} from "./findWeaknesses.ts";

export const fetchMorePokemon = async () => {
    const {results: pokemonNames, next, count} = await listPokemon({url: usePokeStore.getState().nextUrl}) as ListPokemonResponse

    usePokeStore.getState().nextUrl = next
    usePokeStore.getState().totalPokemon = count

    if (Array.isArray(pokemonNames)) {
        // let's eagerly fetch all pokemon details!
        // noinspection ES6MissingAwait
        pokemonNames.forEach(async (p: { url: string }) => {
            // get details
            const res = await fetch(p.url);
            const pokemonDetails: Character = await res.json();

            usePokeStore.getState().addPokemon(pokemonDetails)

            // Find the weaknesses -- i'm interpreting as the types they receive "double damage" from
            const weaknesses = await findWeaknesses(pokemonDetails.types)

            usePokeStore.getState().updatePokemon(pokemonDetails.name, {weaknesses})

            // Find the evolution chain
            const speciesResponse = await fetch(pokemonDetails.species.url)
            const details = await speciesResponse.json()

            const evolutionChainUrl = details.evolution_chain.url

            const evolutionChainResponse = await fetch(evolutionChainUrl)
            const evolutionChain: EvolutionChainResponse = await evolutionChainResponse.json()

            usePokeStore.getState().updatePokemon(pokemonDetails.name, {evolutionChain: evolutionChain.chain})
        })
    }
}
