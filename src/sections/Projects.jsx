import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
    return (
        <section id='projects' className='mx-auto max-w-6xl px-6 py-24'>
            <div className='mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
                <div>
                    <p className='mb-3 text-sm font-medium uppercase tracking-[0.2rem] text-accent'>
                        Selected work
                    </p>

                    <h2 className='text-3xl font-semibold tracking-tight sm:text-5xl'>
                        Things I've <span className='font-serif font-normal italic text-accent'>built.</span>
                    </h2>
                </div>

                <p className='max-w-sm text-sm leading-7 text-mute'>
                    A collection of projects where I practice, experiment, and turn
                    frontend concepts into working applications.
                </p>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>


        </section>
    )
}

export default Projects
