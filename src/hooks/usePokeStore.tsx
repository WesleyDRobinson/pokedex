import {create} from 'zustand'
import {
    Character,
    PokeStore,
    PokeStoreActions
} from "../interfaces";
import {fetchMorePokemon} from "../lib/fetchMorePokemon.ts";

export function initializePokeStore() {
    fetchMorePokemon().catch(e => console.error(e))
}

export const usePokeStore = create<PokeStore & PokeStoreActions>((set) => ({
    pokemon: {},
    activePokemon: null,
    recentPokemon: [],
    nextUrl: '',
    totalPokemon: 0,
    fetchMore: fetchMorePokemon,
    setActivePokemon: (pokemonName: string) => set((state) => {
        let ret: Partial<PokeStore> = {}

        if (state.activePokemon && state.activePokemon.name === pokemonName) {
            ret.recentPokemon = [state.activePokemon.name, ...state.recentPokemon]
        }

        ret.activePokemon = state.pokemon[pokemonName]

        return ret
    }),
    addPokemon: (pokemon: Character) => set((state) => ({pokemon: {...state.pokemon, [pokemon.name]: pokemon}})),
    updatePokemon: (pokemonName: string, update: Partial<Character>) => set((state) => {
        const updatedPokemon = {...state.pokemon[pokemonName], ...update}
        return {pokemon: {...state.pokemon, [pokemonName]: updatedPokemon}}
    })
}));
