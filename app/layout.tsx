import { SettingsProvider } from '../context/SettingsContext';
import "./globals.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black  text-green p-4 text-center flex justify-between items-center">
      <h1 className="text-lg font-bold" >SpaceX Fleet Watch</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-green hover:text-blue">
          <h1>Home</h1>
        </Link>
        <Link href="/settings" className="text-green hover:text-blue">
          Settings
        </Link>
      </nav>
    </header>
  );
};

export default function RootLayout({ children}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="ocra text-green">
        <SettingsProvider>
            <Header /> 
            {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
