import {useState} from "react";
import {usePokeStore} from "./usePokeStore.tsx";

export const usePagination = () => {
    const [offset, setOffset] = useState(0)
    const [limit] = useState(20)

    const pokemon = usePokeStore((state) => state.pokemon)

    const next = () => {
        if (offset + limit >= Object.values(pokemon).length) {
            usePokeStore.getState().fetchMore()
        }

        setOffset(curr => curr + limit)
    }

    const previous = () => {
        setOffset(curr => Math.max(curr - limit, 0))
    }

    return {offset, limit, next, previous}
}
