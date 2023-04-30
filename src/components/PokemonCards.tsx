import Image from 'next/image';
import { Link } from 'react-router-dom';

export default function PokemonCards(props) {
  const pokemons = props.pokemon;

  return (
    <ul
      role='list'
      className='p-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          className='hover:font-bold col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:border'
        >
          <Link to={`/${pokemon.id}`}>
            <div className='flex flex-1 flex-col p-8'>
              <Image
                className='mx-auto h-20 w-auto flex-shrink-0'
                // src={pokemon.sprites.front_default}
                // src={
                //   pokemon.id < 100
                //     ? `/pokemonGif/0${pokemon.id}.gif`
                //     : `/pokemonGif/${pokemon.id}.gif`
                // }
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                alt={pokemon.name}
                height={50}
                width={50}
                placeholder='blur'
                blurDataURL={pokemon.sprites.front_default}
              />
              <h3 className='mt-6 text-md  text-gray-900'>
                {pokemon.name
                  .slice(0, 1)
                  .toUpperCase()
                  .concat(pokemon.name.slice(1))}
              </h3>
              <dl className='mt-1 flex flex-grow flex-col justify-between'>
                <dt className='sr-only'>Title</dt>
                <dd className='text-sm text-gray-500'>
                  Height: {(pokemon.height * 0.1).toFixed(1)}m
                </dd>
                <dd className='text-sm text-gray-500'>
                  Weight: {(pokemon.weight * 0.1).toFixed(1)}kg
                </dd>
                <dt className='sr-only'>Role</dt>
                <dd className='mt-3'>
                  {pokemon.types.map((type, index) => (
                    <span
                      key={index}
                      className={`m-2 inline-flex items-center rounded-full bg-${type.type.name} px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-${type.type.name}`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                  {/* <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                  {person.role}
                </span> */}
                </dd>
              </dl>
            </div>
            <div>
              {/* <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='flex w-0 flex-1'>
                <a
                  href={`mailto:${person.email}`}
                  className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <EnvelopeIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Email
                </a>
              </div>
              <div className='-ml-px flex w-0 flex-1'>
                <a
                  href={`tel:${person.telephone}`}
                  className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <PhoneIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Call
                </a>
              </div>
            </div> */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
