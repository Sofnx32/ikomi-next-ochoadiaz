'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        {href: '/', label: 'Inicio'},
        {href: '/marcas', label: 'Marcas'},
        {href: '/productos', label: 'Productos'},
        {href: '/servicios', label: 'Servicios'},
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`text-white hover:text-gray-400 ${
                                pathname === link.href ? 'font-bold' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}