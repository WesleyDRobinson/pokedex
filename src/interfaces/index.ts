export interface ListPokemonResponse {
    count: number;
    next: string;
    previous: string | null;
    results: { name: string; url: string }[];
}

export interface PokemonType {
    type: {
        name: string;
        url: string
    };
    damage_relations: {
        double_damage_from: { name: string }[]
    };
}

export interface Character {
    abilities: { ability: { name: string; url: string }; is_hidden: boolean; slot: number; }[];
    base_experience: number;
    cries: { [key: string]: unknown };
    forms: { [key: string]: unknown };
    evolution_chain: { url: string };
    game_indices: { [key: string]: unknown };
    height: number;
    held_items: { [key: string]: unknown };
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: { move: { name: string } }[];
    name: string;
    order: number;
    past_abilities: { [key: string]: unknown };
    past_types: { [key: string]: unknown };
    species: { name: string; url: string };
    sprites: { front_default: string; [key: string]: string };
    stats: { [key: string]: any }[];
    types: PokemonType [];
    weight: number;
    weaknesses: string[];
    evolutionChain: EvolutionChain;
}

export interface PokeStore {
    activePokemon: Character | null;
    recentPokemon: string[];
    pokemon: { [pokemonName: string]: Character };
    nextUrl: string;
    totalPokemon: number;
}

export interface PokeStoreActions {
    addPokemon: (pokemon: Character) => void;
    updatePokemon: (pokemonName: string, update: Partial<Character>) => void;
    setActivePokemon: (pokemon: Character['name']) => void;
    fetchMore: () => void;
}

export interface EvolutionDetails {
    gender: null | string;
    held_item: null | string;
    item: null | string;
    known_move: null | string;
    known_move_type: null | string;
    location: null | string;
    min_affection: null | number;
    min_beauty: null | number;
    min_happiness: null | number;
    min_level: null | number;
    needs_overworld_rain: boolean;
    party_species: null | string;
    party_type: null | string;
    relative_physical_stats: null | number;
    time_of_day: string;
    trade_species: null | string;
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
}

export interface EvolutionChain {
    evolution_details: EvolutionDetails[];
    evolves_to: EvolutionChain[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
}

export interface EvolutionChainResponse {
    baby_trigger_item: null | string;
    chain: EvolutionChain;
    id: number;
}