"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="lg:py-8">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hi, I&apos;m</span> Hamza
                        <br />
                        <TypeAnimation
                            sequence={[
                                'FrontEnd Developer',
                                2000,
                                'Web Developer',
                                2000,
                                'Programmer',
                                2000,
                                'Coder',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-justify text-base sm:text-lg mb-6 lg:text-xl'>
                        A passionate front-end developer with expertise in creating visually stunning and responsive websites. Specializing in HTML, CSS, Tailwind, JavaScript, React, and Next.js, I bring ideas to life through elegant and user-centric designs. Let&apos;s build the future of the web together.
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer"><a href="https://www.linkedin.com/in/ameer-hamza-9a93a82b6/" target="_blank">Hire Me</a></button>
                        <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 cursor-pointer">
                            <a href="/Hamza Tariq Resume.pdf"
                                download="Hamza Tariq"
                                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </a>
                        </button>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] lg:mt-3 mt-10 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src='/images/avatar.png'
                            alt="Picture of the author"
                            className="absolute transform -translate-x-1/2 translate-y-1 lg:translate-y-9 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
