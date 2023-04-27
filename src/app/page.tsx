'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [pokemonList, setPokemonList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();
      const promises = data.results.map((pokemon: object) => {
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
  console.log(pokemonList);
  return (
    <div>
      {/* {pokemonList.map((pokemon: object, index: number) => (
        <div key={index}>
          <h1>{pokemon.name}</h1>
        </div>
      ))} */}
    </div>
  );
}
