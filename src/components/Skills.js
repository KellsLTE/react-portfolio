import React from 'react'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"
import { skills } from "../data"

const Skills = () => {
    return (
        <section id="skills">
            <div className='container px-5 py-10 max-auto'>
                <div className='mb-20 text-center'>
                    <ChipIcon className='inline-block w-10 mb-4' />
                    <h1 className='mb-4 text-3xl font-medium text-white sm:text-4xl title-font'>
                        Skills &amp; Technologies
                    </h1>
                    <p className='mx-auto text-base leaading-relaxed xl:w-2/4 lg:w-3/4'>
                        Here are some of my skills I used in the projects.
                    </p>
                </div>
                <div className='flex flex-wrap mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
                    {skills.map(skill => {
                        return (
                            <div key={skill} className='w-full p-2 sm:w-1/2'>
                               <div className='flex items-center h-full p-4 bg-gray-800 rounded'>
                                    <BadgeCheckIcon className='flex-shrink w-6 h-6 mr-4 text-green-400-0' />
                                    <span className='font-medium text-white title-font'>
                                        {skill}
                                    </span>
                                </div> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
