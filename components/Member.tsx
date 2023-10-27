import React from 'react'
import { SocialIcon } from 'react-social-icons';


interface Member {
    name: string;
    image: string;
    line: string;
    post: string;
    linkedin: string;
}

const Member = ({ name, image, line, post, linkedin }: Member) => {
  return (
    <div className="w-1/2 md:w-1/3 p-4">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <div className="flex justify-center">
          <img src={image} alt={name} className="rounded-full h-32 w-32 mb-4 outline" />
        </div>
        <h1 className="text-center text-black font-semibold mt-4">{name}</h1>
        <p className="text-center text-gray-600 font-light mt-2">{line}</p>
        <p className="text-center text-gray-600 font-light mt-2">{post}</p>
        <div className='text-center'>
        <SocialIcon className="hover:scale-125 transition-all" target="_blank" url={linkedin} fgColor="gray" title="LinkedIn" bgColor="transparent"/>
        </div>
        
      </div>
    </div>
  )
}

export default Member
