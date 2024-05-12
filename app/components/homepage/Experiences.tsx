import React from 'react'

type Props = {}

const Experiences = (props: Props) => {
    return (
        <>
            <div className="py-16 border-b">
                <div className="flex flex-col gap-4">
                    <div
                        className="font-semibold text-slate-800"
                        style={{ fontSize: "32px", lineHeight: "48px" }}
                    >
                        Experience
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        {/* FPT */}
                        <div className="flex gap-4">
                            <div className="size-16 p-4 rounded-full ring-2 ring-gray-900/10">
                                <img
                                    className=""
                                    src="https://media.licdn.com/dms/image/C510BAQFdNUkdQtNukA/company-logo_200_200/0/1630582291357/fpt_software_logo?e=2147483647&v=beta&t=PLO5QJZFSau1qgKyvbbrSQH_61Vhg5YWLBgS3epJ6Oo"
                                    alt="my-avt"
                                />
                            </div>
                            <div className="flex flex-col justify-between pb-2">
                                <div
                                    className="text-2xl font-medium"
                                    style={{
                                        lineHeight: "24px",
                                    }}
                                >
                                    FPT Software
                                </div>
                                <div
                                    className="text-xl font-light text-slate-600"
                                    style={{ lineHeight: "24px" }}
                                >
                                    Front-end Developer &#x2022; 2022 - Present
                                </div>
                            </div>
                        </div>

                        {/* OCG */}
                        <div className="flex gap-4">
                            <div className="size-16 p-4 rounded-full ring-2 ring-gray-900/10">
                                <img
                                    className=""
                                    src="https://media.licdn.com/dms/image/C560BAQHwnxLfEcbYtw/company-logo_200_200/0/1630641263827/opencommerce_logo?e=2147483647&v=beta&t=t0CGzHEcIaiZBGeJwF1HMP2Ycxqw9wz-pi3AFxXDuzo"
                                    alt="my-avt"
                                />
                            </div>
                            <div className="flex flex-col justify-between pb-2">
                                <div
                                    className="text-2xl font-medium"
                                    style={{
                                        lineHeight: "24px",
                                    }}
                                >
                                    OpenCommerce Group
                                </div>
                                <div
                                    className="text-xl font-light text-slate-600"
                                    style={{ lineHeight: "24px" }}
                                >
                                    Front-end Developer &#x2022; 2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiences