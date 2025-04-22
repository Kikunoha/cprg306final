import Link from 'next/link';
export default function Header() {
    return (
      <header className="bg-red-600 text-white p-4">
        <h1 className="text-2xl font-bold">OPTCG Card Database</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/suggestions" className="hover:underline">Suggestions</Link>
            </li>
            <li>
              <Link href="/rules" className="hover:underline">Rules</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }