import {usePagination} from "../hooks/usePagination.tsx";
import {usePokeStore} from "../hooks/usePokeStore.tsx";
import {Pagination} from "./Pagination.tsx";
import {SearchPokemon} from "./SearchPokemon.tsx";
import {TypeFilterPokemon} from "./TypeFilterPokemon.tsx";
import {useEffect, useState} from "react";
import {Character} from "../interfaces";

const PokemonUL = ({current}: {current: Character[]}) => {
    return (
        <ul className="mw6 center list ma0 pa0 overflow-auto"
            style={{height: '400px'}}>
            {current && current.map((poke: Character) => (
                <li key={poke.name}
                    className="mw6 ma1 br2 pa2 bg-light-gray flex items-center pointer"
                    onClick={() => usePokeStore.getState().setActivePokemon(poke.name)}>
                    <span className="pv1 ph2 br1 bg-moon-gray w-20 f6">#{poke.id.toString().padStart(4, '0')}</span>
                    <span className="w-two-thirds">{poke.name}</span>
                </li>
            ))}
        </ul>
    )
}

export const PokemonList = () => {
    const {offset, limit, next, previous} = usePagination()

    const [nameFilter, setNameFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState<string[]>([])

    const pokedex = usePokeStore((state) => state.pokemon)

    const charData = Object.values(pokedex)

    const [current, setCurrent] = useState(() => charData.slice(offset, offset + limit))

    useEffect(() => {
        if (typeFilter.length) {
            const filtered = charData.filter((char) => char.types.some((t) => typeFilter.includes(t.type.name)))
            setCurrent(filtered)
        }

        if (nameFilter.length) {
            setCurrent(charData.filter((char) => char.name.includes(nameFilter)))
        }

        if (!typeFilter.length && nameFilter.length === 0) {
            setCurrent(charData.slice(offset, offset + limit))
        }
    }, [offset, limit, nameFilter, typeFilter, charData.length])

    return (
        <div className="">
            <h3>Pokemon List</h3>

            <SearchPokemon nameFilter={nameFilter} setNameFilter={setNameFilter}/>

            <TypeFilterPokemon typeFilter={typeFilter} setTypeFilter={setTypeFilter}/>

            <PokemonUL current={current}/>

            <div className="mt4"></div>

            <Pagination next={next} previous={previous}/>
        </div>
    )
}
