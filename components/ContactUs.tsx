import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {

  return (
    <div className="flex flex-col min-h-screen pt-10">
      <section id="contact" className="flex-grow bg-gradient-to-b from-gray-200 to-gray-300 p-8 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:p-12 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4 font-helvetica-neue tracking-wider">
            CONTACT US
          </h2>
          <div>
            <div className="flex flex-col text-gray-700">
              <p className="text-base md:text-lg">
                3rd Column Engineering Consultants
              </p>
              <p className="text-base md:text-lg">P.O.Box 114093, Dubai</p>
              <p className="text-base md:text-lg">U.A.E</p>
            </div>

            <div className="flex flex-col text-gray-700">
              <p className="text-base md:text-lg flex">
                <span className='text-orange-400'>E-mail: </span> 
                <a href="mailto:info@tceconsultants.ae" className="flex items-center text-base md:text-lg hover:text-blue-700">
                  <FaEnvelope className="mr-1 ml-1" /> info@tceconsultants.ae
                </a>
              </p>
              <p className="text-base md:text-lg">
                <span className='text-orange-400'>Tel:</span> +971 4 257 3222
              </p>
              <p className="text-base md:text-lg">
                <span className='text-orange-400'>Fax:</span> +971 4 257 3279
              </p>
              <p className="text-base md:text-lg">
                <span className='text-orange-400'>Mobile no.:</span> +971 50 4502429 / +971 50 4950148
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-10">
          <img className='rounded-lg' src="/04-mombasa-01.jpg" alt="" />
        </div>
      </section>

      
      <footer className="bg-gray-300 text-gray-500 text-center p-4">
        Copyright © 2023 TCEConsultants
      </footer>
    </div>
    
  );
}

export default ContactUs;
