import Navbar from "@/components/navbar";
import frank from "public/frank.png";
import Image from "next/image";
import ProjectCard from "@/components/projectCard";

const projects = [
  {
    id: 0,
    date: "2022 (Ongoing)",
    title: "CD-Library",
    description: `This project comprised the creation of a React-based components library,
    a critical element of the CodeDevils website rewrite project. The
    library aims to fast-track development by offering pre-designed,
    pre-tested building blocks for easy integration into new projects,
    ensuring efficiency and uniformity. In this project, I led a team of
    three developers, designing new components using Lerna and StorybookJS.
    I assigned monthly tasks, provided support, and ensured our code aligned
    with the project's standards. I delivered timely updates to the club
    president and liaised with project leads from other teams to ensure our
    User Interface (UI) components accurately mirrored the club's brand.
    Additionally, I conducted extensive testing on multiple components to
    adhere to the Web Content Accessibility Guidelines (WCAG).`,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
    link: "https://github.com/ASU-CodeDevils/CD-Library",
  },
  {
    id: 1,
    date: "2020 (Ongoing)",
    title: "Majestic Web",
    description: `This project involved a complete revitalization of the company's website
    design from scratch, all accomplished within a span of six months.
    Utilizing the powerful Django framework and MySQL for the backend, the
    team and I implemented the new website design, ensuring we met the
    company's vision and goals. This was achieved through weekly
    collaborations with the client to align our design and development
    process with their expectations. Following the development phase, we
    deployed the web application through Alibaba Cloud's EC2 service using
    Gunicorn and Nginx as the web server tech stack. This process was
    completed within a tight timeline of three days, demonstrating our
    commitment to efficiency and timely delivery. Post-deployment, I
    supervised the web server's operations, leveraging Alibaba Cloud's
    monitoring software. This allowed us to maintain a smooth and efficient
    operation of our web application, ensuring uninterrupted service and a
    seamless user experience.`,
    image:
      "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#", //TODO: Add link
  },
];

export default function Index() {
  return (
    <>
      <div id="about" className="w-100 h-[40rem] bg-brick">
        <div className="container mx-auto pt-5">
          <Navbar />
          <div className="container mt-20">
            <div className="grid grid-cols-2">
              <div className="pt-10">
                <div className="uppercase font-bold text-3xl text-black">
                  Hi, I&apos;m Frank!
                </div>
                <div className="uppercase font-bold text-3xl text-black mt-2">
                  Full-Stack Developer
                </div>
                <div className="w-48 h-px border-4 border-black mt-6"></div>
                <div className="w-4/5 h-80 text-black text-sm font-normal leading-normal mt-6">
                  As a passionate and experienced full-stack developer with
                  close to 4 years of proven expertise in Django and React, I
                  thrive on building intuitive and scalable web applications. My
                  insatiable appetite for learning drives me to explore new tech
                  stacks for each project, continuously expanding my knowledge
                  and skill set. At Beijing Majestic, I successfully redesigned
                  their website, ensuring consistent software maintenance beyond
                  the initial development cycle, thanks to my resourcefulness
                  and unwavering problem-solving skills. Additionally, as a
                  webmaster at CodeDevils, I led a team of developers, fostering
                  a collaborative environment and overseeing rapid project
                  developments. I am eager to contribute to a dynamic team and
                  drive the company&apos;s success forward through innovation
                  and dedication.
                </div>
              </div>
              <div>
                <div className="img-card w-full h-[35rem]">
                  <Image src={frank} width={500} height={500} alt="Frank" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="container mx-auto w-100 bg-light py-20">
        <div className="uppercase font-bold text-3xl text-black mt-10">
          Projects
        </div>
        <div className="grid grid-cols-4 mt-10 gap-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div style={{height: 40 + 'em'}}></div>
    </>
  );
}
