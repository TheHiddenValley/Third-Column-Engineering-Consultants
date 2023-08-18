import React from 'react';

const ContactUs = () => {
    // add google sheets integration

  return (
    <section id="contact" className="bg-black p-8 h-3/4 flex flex-col md:flex-row">
      <div className="flex-1 md:p-8">
        <h2 className="text-3xl text-orange-400 font-light mb-4 font-helvetica-neue tracking-wider">CONTACT US</h2>
        <div className='pt-6'>
          <p className="text-base md:text-lg text-white">3rd Column Engineering Consultants</p>
          <p className="text-base md:text-lg text-white">P.O.Box 114093, Dubai</p>
          <p className="text-base md:text-lg text-white">U.A.E</p>
          <p className="text-base md:text-lg text-white"><span className='text-orange-400'>E-mail:</span> info@tceconsultants.ae</p>
          <p className="text-base md:text-lg text-white"><span className='text-orange-400'>Tel:</span> +971 4 257 3222</p>
          <p className="text-base md:text-lg text-white"><span className='text-orange-400'>Fax:</span> +971 4 257 3279</p>
        </div>
      </div>
      <div className="flex-1 bg-darkgray p-8">
        <h3 className="text-xl md:text-2xl text-white mb-4">Send Us a Message</h3>
        <form className="space-y-4 sm:space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-4 ">
            <input placeholder='Name' type="text" id="name" name="name" className="w-full md:w-1/2 bg-gray-800 p-2 rounded-md text-white" />
            <input placeholder='Phone' type="tel" id="phone" name="phone" className="w-full md:w-1/2 bg-gray-800 p-2 rounded-md text-white" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input placeholder='Email' type="email" id="email" name="email" className="w-full md:w-full bg-gray-800 p-2 rounded-md text-white" />
          </div>
          <div className="flex flex-col">
            <textarea placeholder='Message' id="message" name="message" rows={4} className="w-full bg-gray-800 p-2 rounded-md text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-400 text-black py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
