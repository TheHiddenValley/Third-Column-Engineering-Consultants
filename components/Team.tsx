import React from 'react'
import Member from './Member';
import { SocialIcon } from "react-social-icons"

const members = [
    {
        name: 'Gunduz Eronat',
        image: '/founder1.jpeg', 
        post: 'Founder',
        linkedin: 'https://www.linkedin.com/in/gunduz-eronat-15b2a635/',
      },
      {
        name: 'Hari Anandan',
        image: '/founder1.jpeg', 
        post: 'Founder',
        linkedin: 'https://www.linkedin.com/in/hari-anandan-31697516/',
      },
      {
        name: 'Jayadev Edakkandy',
        image: '/founder1.jpeg', 
        post: 'Founder',
        linkedin: 'https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/',
      },
      
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-200 h-100 pb-6">
      <h1 className="text-center text-3xl font-helvetica-neue tracking-wider font-light py-4 text-gray-800">
        THE TEAM
      </h1>
      <p className='text-center opacity-60'>Our architects</p>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            image={member.image}
            post={member.post}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  )
}

export default Team
