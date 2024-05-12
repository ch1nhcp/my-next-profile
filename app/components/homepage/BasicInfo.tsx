import React from 'react'
import Image from 'next/image'

type Props = {}

const BasicInfo = (props: Props) => {
    return (
        <>
            {/* Basic Info */}
            <div className="flex flex-col text-center md:flex-row border-b pb-16 gap-6 items-center md:text-left md:items-start">
                {/* Avt */}
                <Image src="/images/chinh-avt.png" alt="my-avt" width={160} height={160} />

                {/* Wrapper */}
                <div className="font-semibold">
                    <div
                        className="text-4xl text-slate-800"
                        style={{ lineHeight: "48px" }}
                    >
                        Chinh Pham
                    </div>
                    <div
                        className="text-3xl text-custom-blue pb-2"
                        style={{ lineHeight: "48px" }}
                    >
                        Software Developer
                    </div>
                    <div />
                    <div className="text-xl font-light text-slate-600">
                        I’m a full-stack software engineer specializing in MERN stack, responsive Web design, ReactJS and NodeJS.
                    </div>
                </div>
            </div >
        </>
    )
}

export default BasicInfo