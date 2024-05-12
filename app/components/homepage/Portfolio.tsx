import React from 'react'
import Link from "next/link";

type Props = {}


const portfolioLinks = [
    {
        title: "Project1",
        src: "https://framerusercontent.com/images/xlOzXkuG0wqbonKl93MGNqc.jpg?scale-down-to=512",
        alt: "project-1",
    },
    {
        title: "Project2",
        src: "https://framerusercontent.com/images/13nj3jxTfxb05bUFgK4KRYxdww.jpg?scale-down-to=512",
        alt: "project-1",
    },
    {
        title: "Project3",
        src: "https://framerusercontent.com/images/kZSSDqSbfDb4zcskrf3LzyBSs.jpg?scale-down-to=1024",
        alt: "project-1",
    },
    {
        title: "Project4",
        src: "https://framerusercontent.com/images/VIsFjHI7LFi9HRrhShpq9mgTlIo.jpg?scale-down-to=2048",
        alt: "project-1",
    },
    {
        title: "Project5",
        src: "https://framerusercontent.com/images/ksVX1CSXfqqlTg5rS9MLIHj111A.jpg?scale-down-to=512",
        alt: "project-1",
    },
    {
        title: "Project6",
        src: "https://framerusercontent.com/images/6dvzXnFwgQ0Ie0o9RWb3VCFdcE.png?scale-down-to=512",
        alt: "project-1",
    },
];

const Portfolio = (props: Props) => {
    return (
        <>
            {/* Portfolio */}
            <div className="py-16 border-b">
                <div className="flex flex-col gap-4">
                    {/* Title */}
                    <div className="flex items-center justify-between">
                        <div
                            className="font-semibold text-slate-800 pb-2"
                            style={{ fontSize: "32px", lineHeight: "48px" }}
                        >
                            Portfolio
                        </div>
                        <div className="group text-custom-blue flex items-center gap-2">
                            <Link
                                href="/portfolio"
                                className="text-xl transition-transform duration-300 ease-in-out group-hover:underline group-hover:cursor-pointer flex gap-2"
                            >
                                See All
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
                    </div>
                    <div className="cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portfolioLinks.map((project, index) => (
                            <img
                                key={index}
                                className="h-auto md:h-56 md:w-80 rounded-lg hover:scale-105 transition-all duration-300"
                                src={project.src}
                                alt={project.alt}
                            />
                        ))}
                    </div>
                </div>
            </div></>
    )
}

export default Portfolio