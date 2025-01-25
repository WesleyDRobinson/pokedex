import React from 'react';
import {EvolutionChain as EvolutionChainType} from '../interfaces';

interface EvolutionChainProps {
    chain: EvolutionChainType;
}

const EvolutionStep: React.FC<EvolutionChainProps> = ({chain}) => {
    return (
        <div className="flex items-center">
            <div className="ma2">
                {chain.species.name}
            </div>
            {chain && chain.evolves_to.length > 0 && (
                <div className="ma2"> → </div>
            )}
            {chain.evolves_to.map((evolution, index) => (
                <EvolutionStep key={index} chain={evolution}/>
            ))}
        </div>
    );
};

export const EvolutionChain: React.FC<EvolutionChainProps> = ({chain}) => {
    return (
        <>
            <h5 className="mv0 f5">Evolution Chain</h5>
            <div className="w-100 flex justify-center">
                <EvolutionStep chain={chain}/>
            </div>
        </>
    );
};
