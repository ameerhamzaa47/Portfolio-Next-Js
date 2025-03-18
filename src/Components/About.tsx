"use client";
import Image from "next/image"
import { useState, useTransition } from "react";
import TabButtonProps from "../../Types/type";
import { TAB_DATA } from "../../Data/AboutData";
import { motion } from 'framer-motion';

const varients = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
}

// Tab Component 

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white cursor-pointer ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
            animate={active ? "active" : "default"}
            variants={varients}
            className='h-1 bg-purple-500 mr-3'
            ></motion.div>
        </button>
    )
}

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    console.log(isPending);

    const handleTab = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about-section" className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src={'/images/Hamza2.png'} alt="Hamza Tariq" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base text-justify lg:text-lg">
                        I&apos;m a passionate front-end developer skilled in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js. I specialize in building responsive, user-friendly websites and web applications that focus on performance and clean, maintainable code. Always staying up-to-date with the latest web technologies, I’m dedicated to delivering intuitive and seamless user experiences.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTab("skills")}
                            active={tab === "skills"} imgUrl={""} title={""} description={""}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTab("education")}
                            active={tab === "education"} imgUrl={""} title={""} description={""}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTab("certifications")}
                            active={tab === "certifications"} imgUrl={""} title={""} description={""}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.map((item) => {
                            return (
                                <div key={item.id} hidden={tab !== item.id}>
                                    {item.content}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
