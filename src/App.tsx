import {usePokeStore} from "./hooks/usePokeStore.tsx";
import {ActivePokemon} from "./components/ActivePokemon.tsx";
import {PokemonList} from "./components/PokemonList.tsx";

function App() {
    const activePokemon = usePokeStore((state) => state.activePokemon)

    return (
        <div className="mw9 center">
            <h1 className="lh-title f1 fw4">Bridge Pokedex 2025-01-24</h1>

            <div className="flex-ns justify-center">
                <div className="w-50-ns">
                    <PokemonList />
                </div>

                {activePokemon && (
                    <div className="w-50-ns">
                        <ActivePokemon activePokemon={activePokemon}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
