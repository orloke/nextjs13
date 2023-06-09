import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from './components/Navbar';

export const metadata = {
  title: 'NextJs 13',
  description: 'Generated by create next app',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
