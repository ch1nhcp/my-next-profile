'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const CTA = (props: Props) => {
    const router = useRouter();
    const handleClickContact = () => router.push('mailto:chinhcpdev@gmail.com')

    return (
        <>
            {/* CTA */}
            <div className="px-4 pt-20 pb-8">
                <div className="text-center flex flex-col gap-6 justify-center items-center">
                    <div
                        className="font-semibold text-slate-800"
                        style={{ fontSize: "32px", lineHeight: "48px" }}
                    >
                        Lets create awesome products!
                    </div>
                    <div
                        className="font-light text-slate-600 text-2xl"
                        style={{ lineHeight: "32px" }}
                    >
                        I am always open to discuss your project, improve your online
                        presence or help with coding challenges and your UX/UI design.
                    </div>
                    <button
                        className="rounded-lg w-52 h-14 text-white text-xl cursor-pointer bg-custom-blue hover:bg-blue-700"
                        onClick={handleClickContact}
                    >
                        Say hello
                    </button>
                </div>
            </div></>
    )
}

export default CTA