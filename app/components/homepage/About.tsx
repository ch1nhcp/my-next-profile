import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <>
            {/* About */}
            <div className="py-16 border-b">
                <div className="flex flex-col gap-4">
                    <div
                        className="font-semibold text-slate-800"
                        style={{ fontSize: "32px", lineHeight: "48px" }}
                    >
                        About me
                    </div>
                    <p className="text-xl font-light leading-relaxed text-slate-600">
                        I am Chinh, a full-stack developer currently chilling on the corner
                        of logic and creativity. I am based in Hanoi and enjoy building
                        engaging things with code.
                    </p>
                    <p className="text-xl font-light leading-relaxed text-slate-600">
                        I develop websites, web apps with clean, efficient, and scalable
                        code. I am especially passionate about effects & animations,
                        intuitive UI, and creating dynamic user experiences. I am always
                        eager to learn new technologies and collaborate with professionals
                        in the field.
                    </p>
                    <p className="text-xl font-light leading-relaxed text-slate-600">
                        Lets join forces to develop innovative solutions together!
                    </p>
                </div>
            </div></>
    )
}

export default About