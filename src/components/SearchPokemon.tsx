interface SearchPokemonProps {
    nameFilter: string;
    setNameFilter: (name: string) => void;
}

export const SearchPokemon = ({nameFilter, setNameFilter}: SearchPokemonProps) => {
    return (
        <div className="mt4">
            <input type="text" className="pa2 br2 w-30"
                   placeholder="Search Pokemon"
                   value={nameFilter}
                   onChange={(e) => setNameFilter(e.target.value)}
            />
        </div>
    )
}
