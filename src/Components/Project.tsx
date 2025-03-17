"use client"
import Link from 'next/link'
import { useState } from 'react'
import { ProjectCardProps, ProjectTagButtonProps } from '../../Types/type'
import ProjectData from '../../Data/ProjectData'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'

// Project Card Component
const ProjectCard = ({ imgUrl, title, description, gitUrl, PreviewUrl }: ProjectCardProps) => {
    return (
        <div className='p-4'>
    <div className='h-72 rounded-t-xl relative group overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
        <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500'>
            <Link href={gitUrl} target='_blank' className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/Link'>
                <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/Link:text-white' />
            </Link>
            <Link href={PreviewUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/Link'>
                <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/Link:text-white' />
            </Link>
        </div>
    </div>
    <div className='text-white rounded-b-xl mt-3 py-6 px-4 shadow-2xl bg-[#181818] h-36 overflow-y-auto scrollbar-hide'>
        <h5 className='text-2xl font-bold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm'>{description}</p>
    </div>
</div>

    )
}

// Project Tag Button Component
const ProjectTagButton = ({ name, onClick, isSelected }: ProjectTagButtonProps) => {
    const buttonStyles = isSelected ? 'text-white border-purple-500' : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button onClick={() => onClick(name)} className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
            {name}
        </button>
    )
}

// Project Component
const Project = () => {
    const [selectedTag, setSelectedTag] = useState('All')

    const handleTagChange = (newTag: string) => {
        setSelectedTag(newTag)
    }

    const filteredProjects = ProjectData.filter((project: { tag: string[] }) => 
        project.tag.includes(selectedTag)
    )

    return (
        <>
            <h2 className='text-white text-4xl font-bold text-center mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTagButton
                onClick={handleTagChange}
                name='All'
                isSelected={selectedTag === 'All'}
                />
                <ProjectTagButton
                onClick={handleTagChange}
                name='React.Js'
                isSelected={selectedTag === 'React.Js'}
                />
                <ProjectTagButton
                onClick={handleTagChange}
                name='Next.Js'
                isSelected={selectedTag === 'Next.Js'}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredProjects.map((project: ProjectCardProps) => (
                    <ProjectCard key={project.id} imgUrl={project.imgUrl} title={project.title} description={project.description} gitUrl={project.gitUrl} PreviewUrl={project.PreviewUrl} />
                ))}
            </div>
        </>
    )
}

export default Project
