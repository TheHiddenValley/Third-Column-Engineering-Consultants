import React from 'react'

const About = () => {
  return (
    // <section id='about' className='h-screen bg-amber-100 p-6 '>
    //     <h1 className='flex text-5xl justify-center font-black'>About</h1>
    //     <p className='text-center pt-5 px-10 font-montserrat'>3rd Column Engineering Consultants is an Architectural & Engineering practice based in Dubai, the commercial capital of the Middle East. We are an integrated, single source design firm with shared experience and expertise of a bunch of creative designers, logical thinkers and dedicated professionals. We offer Architectural, Engineering and Urban Planning services to a diverse base of national & international clients. We offer to our client a diverse range of services integrating skills from many operating systems to provide highly innovative solutions. Our quest for quality is inherent in our structure being carried through the detailed design, construction and post completion phases. Our objectives are, with the other members of the design team, to provide our clients with exceptional buildings and habitable environment promoting a sustainable development to meet the demands of the market within the constraints of our Clients budgets.</p>
    //     <h1 className='pt-4 flex text-3xl justify-center font-bold'>Founders</h1>
        
    //     <div className='flex'>
            
    //     </div>
    // </section>
    <section id="about" className='bg-amber-100 h-screen'>
    <div className="pb-12 md:pt-16 md:pb-40">
      <h1 className="text-center font-bold text-5xl sm:pt-4">
        About Us
        <hr className="w-20 h-1 mx-auto my-4 bg-gray-800 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-7 md:space-y-0 md:flex-row md:text-left">
      
        <div className="md:w-1/2 ">
          
          
          <p className="text-center">
          3rd Column Engineering Consultants is an Architectural & Engineering practice based in Dubai, the commercial capital of the Middle East. We are an integrated, single source design firm with shared experience and expertise of a bunch of creative designers, logical thinkers and dedicated professionals. We offer Architectural, Engineering and Urban Planning services to a diverse base of national & international clients. We offer to our client a diverse range of services integrating skills from many operating systems to provide highly innovative solutions. Our quest for quality is inherent in our structure being carried through the detailed design, construction and post completion phases. Our objectives are, with the other members of the design team, to provide our clients with exceptional buildings and habitable environment promoting a sustainable development to meet the demands of the market within the constraints of our Clients budgets.
          </p>

        </div>
        {/* <div className="left-1/2 -ml-0.5 w-3 h-25 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2.5 h-20 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2 h-10 bg-purple-600 rounded-md"></div>
      <div className="left-1/2 -ml-0.5 w-1.5 h-5 bg-purple-600 rounded-md"></div> */}
      
      
      
        {/* <div className="text-center md:w-1/2 md:text-left">
        <h1 className="text-center text-5xl font-bold mb-6 md:text-left">
          Experience
        </h1>
        <div className="flex text-center justify-center z-10 md:justify-start pb-35">
          <Position url="https://media.licdn.com/dms/image/C510BAQEBxDFxLTHO2g/company-logo_200_200/0/1554193826994?e=2147483647&v=beta&t=A8j3JdLLw5_HlBcT8EYQScN6JWurPlu_ILIxbtsghKQ" title="Humans of Gwalior" subtitle="RCoY IIITM"/>
      </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default About
