import './globals.css';
import { Inter } from 'next/font/google';
import { ContextProvider } from '@/context/Context';
import { HashRouter } from 'react-router-dom';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokedex',
  description: 'Pokemon Pokedex',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ContextProvider>
        <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
