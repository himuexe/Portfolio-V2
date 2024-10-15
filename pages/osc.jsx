import React from 'react'
import { OpenSourceContributions } from '../public/data/Contributions'
import { LuExternalLink } from "react-icons/lu";
import { IoGitPullRequestSharp } from "react-icons/io5";

const Description = ({ title,status,description,link }) => {
    return (
        <div className="mt-16">
            <div className="justify-between text-white border-0 border-red-500 md:flex">
                <div className="flex font-bold text-blue-400 sm1:text-lg md:text-xl"><span>{title}</span><span className="mt-1 ml-8"><a href={link} target="_blank"><LuExternalLink /></a></span></div>
                <div className={`p-2 w-fit md:ml-2 text-sm text-white ${status === 'Merged' ? 'bg-[#8957E5]' : 'bg-[#238636]'} rounded-xl flex`}><span className="mt-1 mr-2 text-sm"><IoGitPullRequestSharp /></span><span>{status}</span></div>
            </div>
            <div className="mt-2">{description}</div>
        </div>
    )
}

const Contributions = () => {
  return (
    <div className="mb-20 text-white">
        <div className="font-extrabold tracking-tighter text-center text-blue-400 sm1:text-xl sm1:p-6 md:pl-20 md:text-6xl">
            Open Source Contributions
        </div>
        <div className="font-extrabold tracking-tighter text-center text-blue-400 sm1:text-xl sm1:p-6 md:pl-20 md:text-6xl">
            Pull Requests
        </div>
        <div className="m-auto sm1:p-6 md:p-10 lg:p-20 lg:w-4/5 xl:w-3/5 md:mt-0">
            {
                OpenSourceContributions.map( (contri) => (
                    <Description title={contri.title} status={contri.status} description={contri.description} key={contri.id} link={contri.link}/>
                ))
            }
        </div>
    </div>
  )
}

export default Contributions
