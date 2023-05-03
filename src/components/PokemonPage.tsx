'use client';
import { useParams } from 'react-router-dom';
import Image from 'next/image';
import Stats from './Stats';
export default function PokemonPage(props) {
  const { id } = useParams();
  const pokemonId = Number(id);
  let pokemonData = props.pokemon;
  const pokemon = pokemonData[pokemonId];
  const name = pokemon?.name
    .slice(0, 1)
    .toUpperCase()
    .concat(pokemon.name.slice(1));

  // console.log(props);
  // console.log(pokemonId);
  // console.log(`/pokemonGif/0${pokemon?.id}.gif`);
  return (
    <div className='bg-white mx-auto max-w-7xl sm:px-6 lg:px-8 rounded'>
      {/* Content goes here */}
      <Image
        className='mx-auto m-10'
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <h1 className='text-black text-center text-3xl font-medium'>{name}</h1>
      <dd className='mt-5 mb-1 flex justify-center'>
        {pokemon?.types.map((type, index) => (
          <span
            key={index}
            className={`m-2 inline-flex items-center rounded-full bg-${type.type.name} px-3 py-1 text-l font-medium text-white ring-1 ring-inset ring-${type.type.name}`}
          >
            {type.type.name}
          </span>
        ))}
      </dd>
      <Stats stats={pokemon.stats} />
    </div>
  );
}
