'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black border-b border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-500">Zeyad</div>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-400 transition ${
                pathname === item.href ? 'text-blue-400 font-semibold' : 'text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
