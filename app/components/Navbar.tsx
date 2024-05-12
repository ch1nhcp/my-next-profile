'use client'
import Link from 'next/link'
import { useState } from 'react';

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
        },
        {
            title: 'Blog',
            url: '/blog',
        },
        {
            title: 'About',
            url: '/about',
        }
    ]
    return (
        <div className="pt-16 pb-28 flex md:flex-row items-center justify-between">
            <Link href={'/'} className="font-bold text-2xl cursor-pointer" >Chinhintech</Link>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 focus:outline-none focus:text-gray-500"
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6ZM20 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11ZM4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18Z"
                        />
                    </svg>
                </button>
            </div>
            <ul className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-8 mt-4 md:mt-0`}>
                {navLinks.map((navLink, index) => (
                    <li key={index} >
                        <Link href={navLink.url} className="font-semibold text-xl hover:underline">
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
