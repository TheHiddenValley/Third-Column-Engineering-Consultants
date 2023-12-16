import React from 'react'
import Image from 'next/image'
import { SocialIcon } from "react-social-icons"

const services = [
    { service: "Architecture" },
    { service: "Interior Design" },
    { service: "Structural Design" },
    { service: "Project Management" },
    { service: "Master Planning" },
    { service: "Urban Design" },
    { service: "Value Engineering" },
    { service: "Project Supervision" },
    { service: "Peer Review" },
    { service: "Third Party Verification" },
  ]

const About = () => {
  return (
    <section id="about" className='bg-slate-100 h-auto sm:pt-20'>
      <div className="pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center text-gray-800 font-helvetica-neue tracking-wider font-light text-3xl">
          ABOUT
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-800 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-gray-800 font-helvetica-neue tracking-wider font-light text-xl  mb-6 md:text-left md:pl-4">
              WHO ARE WE?
            </h1>
            <p className='pl-4'>
                3rd Column Engineering Consultants is an Architectural & Engineering practice based in Dubai, the commercial capital of the Middle East. We are an integrated, single source design firm with shared experience and expertise of a bunch of creative designers, logical thinkers and dedicated professionals. We offer Architectural, Engineering and Urban Planning services to a diverse base of national & international clients provide them a diverse range of services integrating services from many operating systems to provide highly innovative solutions.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-gray-800 font-helvetica-neue tracking-wider font-light text-xl mb-6">OUR SERVICES</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {services.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-gray-800 hover:text-slate-100"
                  >
                    {item.service}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
//     <section id="about" className='bg-slate-100 h-100'>
//     <div className="pb-12 md:pt-6 md:pb-40">
//         <div className='flex justify-left'>
//             <h1 className="text-3xl font-light p-4 text-gray-800 font-helvetica-neue tracking-wider sm:pt-6 ">
//             ABOUT US
//             </h1>

//         <div className="flex flex-col space-y-10 items-stretch align-top md:space-x-7 md:space-y-0 md:flex-row md:text-left">
        
//             <div className="md:w-1/2 ">
            
            
//             <p className=" text-lg text-gray-800 sm:p-5">
//             3rd Column Engineering Consultants is an Architectural & Engineering practice based in Dubai, the commercial capital of the Middle East. We are an integrated, single source design firm with shared experience and expertise of a bunch of creative designers, logical thinkers and dedicated professionals. We offer Architectural, Engineering and Urban Planning services to a diverse base of national & international clients. We offer to our client a diverse range of services integrating services from many operating systems to provide highly innovative solutions. Our quest for quality is inherent in our structure being carried through the detailed design, construction and post completion phases. Our objectives are, with the other members of the design team, to provide our clients with exceptional buildings and habitable environment promoting a sustainable development to meet the demands of the market within the constraints of our Clients budgets.
//             </p>
//             </div>
//         </div>
//         <div className='text-center md:w-1/2 md:text-left'>
//         <h1 className="text-2xl text-gray-800 font-helvetica-neue tracking-wider mb-6">My services</h1>
//             <div className="flex flex-cols-3 justify-center z-10 md:justify-start">
//               {services.map((item, idx) => {
//                 return (
//                   <p
//                     key={idx}
//                     className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
//                   >
//                     {item.service}
//                   </p>
//                 )
//               })}
//             </div>
//         </div>
//         </div>

//       <div>
        
//       </div>
//       <h1 className='text-center p-3 text-3xl font-light font-helvetica-neue tracking-wider '>FOUNDERS</h1>
//       <div className='flex justify-center space-between space-x-10 p-1'>
//         <div className='bg-gray-800 p-5 hover:rounded-xl hover:opacity-95 hover:scale-105 transition-all'>
//             <Image className='rounded-lg shadow-2xl mt-2 ' src='/founder1.jpeg' alt='' width={175} height={175}/>
//             <h2 className=' flex justify-center text-center mt-2 pt-2 text-gray-400 font-bold text-lg'>Jayadev Edakkandy</h2>
//             <h3 className='flex justify-center text-white'>Principal architect</h3>
//             <div className='flex justify-center'>
//                 <SocialIcon className="hover:scale-125 transition-all " target="_blank" url="https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/" fgColor="gray" title="LinkedIn" bgColor="transparent"/>
//                 <SocialIcon className="hover:scale-125 transition-all" 
//                 target={"jayadu@gmail.com"} url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" network="email" fgColor="gray" bgColor="transparent" />
//             </div>
//         </div>
//         <div className='bg-gray-800 p-5 hover:rounded-xl hover:opacity-95 hover:scale-105 transition-all'>
//             <Image className='rounded-lg shadow-2xl mt-2 ' src='/founder1.jpeg' alt='' width={175} height={175}/>
//             <h2 className=' flex justify-center text-center mt-2 pt-2 text-gray-400 text-lg font-bold'>Jayadev Edakkandy</h2>
//             <h3 className='flex justify-center text-white'>Principal architect</h3>

//             <div className='flex justify-center'>
//                 <SocialIcon className="hover:scale-125 transition-all " target="_blank" url="https://www.linkedin.com/in/jayadev-edakkandy-7a67951b/" fgColor="gray" title="LinkedIn" bgColor="transparent"/>
//                 <SocialIcon className="hover:scale-125 transition-all" 
//                 target={"jayadu@gmail.com"} url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" network="email" fgColor="gray" bgColor="transparent" />
//             </div>

//         </div>
      
//       </div>
//     </div>
//   </section>
  )
}

export default About
