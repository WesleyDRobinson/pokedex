import {usePokeStore} from "../hooks/usePokeStore.tsx";
import React, {SyntheticEvent, KeyboardEvent} from "react";

interface PaginationProps {
    next: () => void;
    previous: () => void;
}

interface ButtonProps {
    onClick: (e: SyntheticEvent) => void;
    text: 'Next' | 'Previous';
}

const PaginationButton: React.FC<ButtonProps> = ({onClick, text}) => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onClick(e)
        }
    }

    return (
        <button className="w4 ma2 pa2 ba bw2 b--black-20 bg-light-gray br2 pointer grow"
                onClick={onClick}
                onKeyDown={onKeyDown}>
            {text}
        </button>
    )
}

export const Pagination = ({next, previous}: PaginationProps) => {
    const pokemon = usePokeStore((state) => state.pokemon)
    const total = Object.values(pokemon).length
    const count = usePokeStore((state) => state.totalPokemon)

    return (
        <>
            <div className="flex justify-center">
                <span className="ma2">Pokedex length: {total}/{count}</span>
            </div>

            <div className="flex justify-center">
                <PaginationButton text={'Previous'} onClick={previous}/>
                <PaginationButton text={'Next'} onClick={next}/>
            </div>
        </>
    )
}
