import React from 'react'

type Props = {}

const frontendDeveloperSkills = [
    { title: "HTML5" },
    { title: "CSS3" },
    { title: "JavaScript (ES6+)" },
    { title: "TypeScripts" },
    { title: "ReactJS" },
    { title: "NextJS" },
    { title: "VueJS" },
    { title: "Tailwind CSS" },
    { title: "MUI" },
    { title: "Styled Components" },
    { title: "I18n" },
    { title: "Responsive design" },
    { title: "Problem solving" },
    { title: "Version control systems" },
    { title: "Debugging" },
    { title: "NodeJS" },
    { title: "ExpressJS" },
    { title: "Ant Design" },
    { title: "Testing" },
];

const Skills = (props: Props) => {

    return (
        <>
            {/* Skills section */}
            <div className="py-16 border-b">
                <div className="flex flex-col gap-4">
                    <div
                        className="font-semibold text-slate-800"
                        style={{ fontSize: "32px", lineHeight: "48px" }}
                    >
                        Skills
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {frontendDeveloperSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="text-xl font-light inline-flex items-center justify-center px-4 py-2 rounded-lg ring-1 ring-inset ring-gray-500/10"
                                style={{ lineHeight: "24px" }}
                            >
                                {skill.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills