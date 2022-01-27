import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';

function App() {
    const [endpoint, setEndpoint] = useState["https://pokeapi.co/api/v2/pokemon/"]
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(endpoint);
                console.log(result.data.results);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint])

    return (
        <>
            <h1>Pokemon</h1>
            <button type='button'
                    onClick={setEndpoint(pokemonData.previous)}
            >vorige
            </button>
            <button type='button'
                    onClick={setEndpoint(pokemonData.next)}
            >volgende
            </button>
            <article className="card">
                {pokemonData && pokemonData.results.map( (pokemon) => {
                    return (<PokemonCard key={pokemon.name} id={pokemon.name}/>)
                })}
            </article>
        </>

    )
}

export default App;
