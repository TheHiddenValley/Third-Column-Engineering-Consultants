import React from 'react'
import Member from './Member';

const members = [
    {
        name: 'Person1',
        image: '/founder1.jpeg', 
        post: 'Founder'
      },
      {
        name: 'Person1',
        image: '/founder1.jpeg', 
        post: 'Founder'
      },
      {
        name: 'Person1',
        image: '/founder1.jpeg', 
        post: 'Founder'
      },
      {
        name: 'Person1',
        image: '/founder1.jpeg', 
        post: 'Founder'
      },
      {
        name: 'Person1',
        image: '/founder1.jpeg', 
        post: 'Founder'
      },
      
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-100 h-100 pb-6">
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
          />
        ))}
      </div>
    </section>
  )
}

export default Team
