import {Character} from "../interfaces";
import {EvolutionChain} from "./EvolutionChain";

interface ActivePokemonProps {
    activePokemon: Character
}

export const ActivePokemon = ({activePokemon}: ActivePokemonProps) => {
    const {
        sprites: {front_default: characterImage},
        name,
        height,
        weight,
        types,
        abilities,
        moves,
        stats,
        weaknesses,
        evolutionChain
    } = activePokemon

    const mapColor = (typeName: string) => {
        return {
            normal: 'bg-black-10',
            fighting: 'bg-red',
            flying: 'bg-blue',
            poison: 'bg-orange',
            ground: 'bg-yellow',
            rock: 'bg-gold',
            bug: 'bg-green',
            ghost: 'bg-black',
            steel: 'bg-silver',
            fire: 'bg-red',
            water: 'bg-blue',
            grass: 'bg-green',
            electric: 'bg-yellow',
            psychic: 'bg-purple',
            ice: 'bg-light-blue',
            dragon: 'bg-gold',
            dark: 'bg-black',
            fairy: 'bg-pink',
            unknown: 'bg-gray',
            shadow: 'bg-black'
        }[typeName] || 'bg-black-10'
    };

    const finalType = types[types.length - 1].type.name
    const bgColor = mapColor(finalType)

    return (
        <div className="glow" style={{cursor: 'default'}}>
            <h2 className="mv0">{name}</h2>

            <div className={`center ph3 ba bw2 b--black-30 br3 o-80 glow hover-${bgColor}`}
                 style={{transition: 'background 1s'}}>

                <div className="mv3">
                    <div className="dib center pa2 br3 bg-white">
                        {characterImage && <img src={characterImage} alt={name}/>}
                    </div>
                </div>

                <div className="mv3" id="evolution">
                    <EvolutionChain chain={evolutionChain}/>
                </div>

                <div className="flex justify-around">
                    <div className="w-third"><h5 className="mt0 mb2 f5">height</h5>{height}</div>
                    <div className="w-third"><h5 className="mt0 mb2 f5">weight</h5>{weight}</div>

                    <div className="w-two-thirds">
                        <h5 className="mt0 mb2 f5">types</h5>
                        {types?.map((type, i, arr) => {
                            const comma = i === arr.length - 1 ? '' : ','
                            return <span className="" key={type.type.name}>
                                    {' '}{type.type.name}{comma}
                                    </span>
                        })}
                    </div>
                </div>

                <div className="mv3" id="abilities">
                    <h5 className="mt0 mb2 f5">abilities</h5>
                    {abilities?.map((ab, i, arr) => {
                        const comma = i === arr.length - 1 ? '' : ','
                        return <span className="" key={ab.ability.name}>
                                        {' '}{ab.ability.name}{ab.is_hidden && ` (hidden)`}{comma}
                                    </span>
                    })}
                </div>

                <div className="mv3" id="weaknesses">
                    <h5 className="mt0 mb2 f5">weaknesses <small>(double damage from)</small></h5>
                    <div className="">{weaknesses?.join(', ')}</div>
                </div>

                <div className="mv3 flex justify-around">
                    <div className="mv3 w-two-thirds" id="moves">
                        <h5 className="mt0 mb2 f5">moves</h5>
                        {moves?.map((move, i, arr) => {
                            const comma = i === arr.length - 1 ? '' : ','
                            return <span className="" key={move.move.name}>
                                        {' '}{move.move.name}{comma}
                                    </span>
                        })}
                    </div>

                    <div className="mv3 w-one-third flex flex-column items-center" id="stats">
                        <h5 className="mt0 mb2 f5">stats</h5>
                        <div className="">
                            {stats.map((stat) => {
                                return <div className="mb2" key={stat.stat.name}>
                                    <div className="">{stat.stat.name}: {stat.base_stat}</div>
                                    <div className="f7 pl2">effort: {stat.effort}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}