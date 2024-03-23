import Link from "next/link";
import React from "react";

function Home() {
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

  const socialLinks = [
    { title: "Github", link: "/" },
    { title: "LinkedIn", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Blog", link: "/blog" },
    { title: "Resume", link: "/resume" },
  ];
  const handleClickContact = () => {
    window.location.href = "mailto:chinhcpdev@gmail.com";
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-32 pb-28 mx-auto px-12 sm:px-24 xl:px-72 max-w-[1600px]">
        {/* Basic Info */}
        <div className="flex flex-col text-center md:flex-row border-b pb-16 gap-6 items-center md:text-left md:items-start">
          {/* Avt */}
          <img
            className="size-40 h-40 w-40 m-1 rounded-full ring-2 ring-gray-600"
            src="https://media.licdn.com/dms/image/C5603AQHwqKEd3zEBdg/profile-displayphoto-shrink_400_400/0/1660205818650?e=1715212800&v=beta&t=dMYc18fofx56q7fhUj18LQuN3IBMXCf80RN5VR09dmU"
            alt="my-avt"
          />

          {/* Wrapper */}
          <div className="">
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
            </div>
            <div className="text-xl font-light text-slate-600">
              I’m a fullstack software engineer at FPT Software. I specialize in
              MERN stack, Responsive Web Design, ReactJS and NodeJS.
            </div>
          </div>
        </div>

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
        </div>

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
                  href="/project"
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
        </div>

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
            // onClick={handleClickContact}
            >
              Say hello
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="sm:px-60 py-8">
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
        </div>
      </div>
    </>
  );
}

export default Home;
