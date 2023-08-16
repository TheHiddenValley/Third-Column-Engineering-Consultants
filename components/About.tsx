import React from 'react'
import Image from 'next/image'
import { SocialIcon } from "react-social-icons"

const About = () => {
  return (

    <section id="about" className='bg-slate-100 h-100'>
    <div className="pb-12 md:pt-6 md:pb-40">
      <h1 className="text-center text-orange-500 font-bold text-4xl sm:pt-6 ">
        ABOUT US
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-7 md:space-y-0 md:flex-row md:text-left">
      
        <div className="md:w-1/2 ">
          
          
          <p className="text-center text-lg text-gray-800 sm:p-5">
          3rd Column Engineering Consultants is an Architectural & Engineering practice based in Dubai, the commercial capital of the Middle East. We are an integrated, single source design firm with shared experience and expertise of a bunch of creative designers, logical thinkers and dedicated professionals. We offer Architectural, Engineering and Urban Planning services to a diverse base of national & international clients. We offer to our client a diverse range of services integrating skills from many operating systems to provide highly innovative solutions. Our quest for quality is inherent in our structure being carried through the detailed design, construction and post completion phases. Our objectives are, with the other members of the design team, to provide our clients with exceptional buildings and habitable environment promoting a sustainable development to meet the demands of the market within the constraints of our Clients budgets.
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam omnis tempore exercitationem voluptate facere illo, quos maxime nulla incidunt repellendus amet, ea accusantium necessitatibus alias numquam culpa. Veritatis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laborum, quasi provident in necessitatibus quibusdam enim sequi similique, sunt reiciendis inventore nemo, aliquam reprehenderit dolorem laudantium incidunt pariatur officiis. Voluptates. */}
          </p>

        </div>
        {/* <div className="left-1/2 -ml-0.5 w-3 h-25 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2.5 h-20 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2 h-10 bg-purple-600 rounded-md"></div>
      <div className="left-1/2 -ml-0.5 w-1.5 h-5 bg-purple-600 rounded-md"></div> */}
        
      
      </div>
      <div>
        
      </div>
      <h1 className='text-center p-3 text-4xl font-black tracking-wider '>FOUNDERS</h1>
      <div className='flex justify-center space-between space-x-10 p-1'>
        <div className='bg-gray-800 p-5 hover:rounded-xl hover:opacity-95 hover:scale-105 transition-all'>
            <Image className='rounded-lg shadow-2xl mt-2 ' src='/founder1.jpeg' alt='' width={175} height={175}/>
            <h2 className=' flex justify-center text-center mt-2 pt-2 text-gray-400 font-bold text-lg'>Jayadev Edakkandy</h2>
            <h3 className='flex justify-center text-white'>Principal architect</h3>
            <div className='flex justify-center'>
                <SocialIcon className="hover:scale-125 transition-all " target="_blank" url="https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/" fgColor="gray" title="LinkedIn" bgColor="transparent"/>
                <SocialIcon className="hover:scale-125 transition-all" 
                target={"jayadu@gmail.com"} url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" network="email" fgColor="gray" bgColor="transparent" />
            </div>
        </div>
        <div className='bg-gray-800 p-5 hover:rounded-xl hover:opacity-95 hover:scale-105 transition-all'>
            <Image className='rounded-lg shadow-2xl mt-2 ' src='/founder1.jpeg' alt='' width={175} height={175}/>
            <h2 className=' flex justify-center text-center mt-2 pt-2 text-gray-400 text-lg font-bold'>Jayadev Edakkandy</h2>
            <h3 className='flex justify-center text-white'>Principal architect</h3>

            <div className='flex justify-center'>
                <SocialIcon className="hover:scale-125 transition-all " target="_blank" url="https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/" fgColor="gray" title="LinkedIn" bgColor="transparent"/>
                <SocialIcon className="hover:scale-125 transition-all" 
                target={"jayadu@gmail.com"} url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" network="email" fgColor="gray" bgColor="transparent" />
            </div>

        </div>
      
      </div>
    </div>
  </section>
  )
}

export default About
