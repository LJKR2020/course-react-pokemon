import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({id}) => {
    const [singlePokemon, setSinglePokemon] = useState([]);

    useEffect(() => {
        async function fetchSpecificPokemon() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setSinglePokemon(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        fetchSpecificPokemon();
    }, [id])

    return (
        <div className="pokemoncard">
            {Object.keys(singlePokemon).length > 0 && <>
                <h2>{singlePokemon.name}</h2>
                <img src={singlePokemon.sprites.front_default} alt="pokemon-naam"/>
                <div className="moves">
                    <h4>Aantal moves: </h4>
                    <h4>{singlePokemon.moves.length}</h4>
                </div>
                <div className="moves">
                    <h4>Weigth:</h4>
                    <h4>{singlePokemon.weight}</h4>
                </div>
                <h4>Abilities:</h4>
                {singlePokemon.abilities.map((ability, index) => {
                    return <li key={index} className="abilities">
                        {ability.ability.name}
                    </li>
                })}
                <h4>Soorten moves: </h4>
                {singlePokemon.types.map((type, index) => {
                    return <li key={index} className="abilities">
                        {type.type.name}
                    </li>
                })}
            </>}
        </div>
    );
};

export default PokemonCard;
