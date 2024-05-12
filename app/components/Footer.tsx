import React from 'react'
import Link from "next/link";

type Props = {}

const socialLinks = [
    { title: "Github", link: "https://github.com/ch1nhcp", newTab: true },
    { title: "LinkedIn", link: 'https://www.linkedin.com/in/chinhcp/', newTab: true },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Blog", link: "/blog" },
    { title: "Resume", link: "/resume" },
];


const Footer = (props: Props) => {
    return (
        <>
            {/* Footer */}
            <div className="sm:px-60 py-8 pb-28">
                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16">
                    {socialLinks.map((link, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer flex items-center gap-2"
                        >
                            <Link
                                href={link.link}
                                className="text-xl text-slate-800 transition-transform duration-300 ease-in-out group-hover:underline cursor-pointer flex gap-2"
                            >
                                {link.title}
                            </Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </div></>
    )
}

export default Footer