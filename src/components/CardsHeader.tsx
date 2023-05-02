import React from 'react';
import { useContextApi } from '@/context/Context';
const tabs = [
  { name: 'Kanto', href: '#', current: true },
  { name: 'Johto', href: '#', current: false },
  { name: 'Hoenn', href: '#', current: false },
  { name: 'Sinnoh', href: '#', current: false },
  { name: 'Unova', href: '#', current: false },
  { name: 'Kalos', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CardsHeader() {
  const { toggleCall } = useContextApi();
  return (
    <div className='p-3 border-b border-gray-100'>
      <div className='sm:flex sm:items-baseline'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Regions
        </h3>
        <div className='mt-4 sm:ml-10 sm:mt-0'>
          <nav className='-mb-px flex space-x-8'>
            {tabs.map((tab) => (
              <a
                onClick={toggleCall}
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
