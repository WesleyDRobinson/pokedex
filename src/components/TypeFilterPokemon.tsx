interface TypeFilterPokemonProps {
    typeFilter: string[];
    setTypeFilter: (type: string[]) => void;
}

export const TypeFilterPokemon = ({typeFilter, setTypeFilter}: TypeFilterPokemonProps) => {
    return (
        <div className="mt3 w-80 center">
            <fieldset className="br2">
                <legend>Select Pokemon Type</legend>
                <div className="flex flex-wrap">
                    {['Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'].map((type) => (
                        <label key={type} className="db ma3">
                            <input
                                className="mr1"
                                type="checkbox"
                                name="pokemonType"
                                value={type}
                                checked={typeFilter.includes(type.toLowerCase())}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setTypeFilter([...typeFilter, type.toLowerCase()])
                                    } else {
                                        setTypeFilter(typeFilter.filter((t) => t !== type.toLowerCase()))
                                    }
                                }}
                            />
                            {type}
                        </label>
                    ))}
                    <span className="db ma3 br2 bg-light-gray pa2 ml-auto pointer"
                          onClick={() => setTypeFilter([])}>Clear</span>
                </div>
            </fieldset>
        </div>
    )
}