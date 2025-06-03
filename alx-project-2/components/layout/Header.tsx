import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
    <header className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Next.js Project Header</h1>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/home" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:underline">About</Link>
                </li>
                <li>
                    <Link href="/posts" className="hover:underline">Posts</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
