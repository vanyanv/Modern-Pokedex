'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PokemonCards from '@/components/PokemonCards';
export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();
      const promises = data.results.map((pokemon) => {
        return fetch(pokemon.url).then((res) => res.json());
      });
      Promise.all(promises).then((results) => {
        setPokemonList(results);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  if (loading) return <h1>Loading....</h1>;

  console.log(pokemonList[0].types);
  return (
    <div className='min-h-full p-20'>
      <PokemonCards pokemon={pokemonList} />
    </div>
  );
}
