import React from 'react'
import Member from './Member';
import { SocialIcon } from "react-social-icons"

const members = [
    {
        name: 'Gunduz Eronat',
        image: '/Eronat.jpeg',
        line: 'Architect and Town Planner',
        post: 'Honorary President',
        linkedin: 'https://www.linkedin.com/in/gunduz-eronat-15b2a635/',
      },
      {
        name: 'Hari Anandan',
        image: '/Hari.jpeg', 
        line: 'Structural Engineer',
        post: 'Managing Director',
        linkedin: 'https://www.linkedin.com/in/hari-anandan-31697516/',
      },
      {
        name: 'Jayadev Edakkandy',
        image: '/founder1.jpeg', 
        line: 'Architect and Town Planner',
        post: 'Director - Principal Architect',
        linkedin: 'https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/',
      },
      
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-200 h-100 pb-6">
      <div className="base-color h-16 bg-gray-800 md:hidden">
        
      </div>
      <h1 className="text-center text-3xl font-helvetica-neue tracking-wider font-light py-4 text-gray-800">
        THE TEAM
      </h1>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            image={member.image}
            line={member.line}
            post={member.post}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  )
}

export default Team
