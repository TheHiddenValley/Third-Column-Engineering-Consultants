import React from 'react';

const ContactUs = () => {
    // add google sheets integration
  //   const scriptURL = <SCRIPT_URL>; // Replace with your Google Apps Script URL
  // const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  // const handleChange = (e:any) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();

  //   fetch(scriptURL, {
  //     method: 'POST',
  //     body: new FormData(e.target),
  //   })
  //     .then((response) => {
  //       console.log('Success!', response);
  //       // You can add code to handle success, e.g., clear the form
  //     })
  //     .catch((error) => {
  //       console.error('Error!', error.message);
  //       // You can add code to handle errors
  //     });
  // };


  return (
    <section id="contact" className="bg-gray-200 p-8 h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl text-gray-800 font-semibold mb-4 font-helvetica-neue tracking-wider">
          CONTACT US
        </h2>
        <div className="flex flex-col text-gray-700">
          <p className="text-base md:text-lg">
            3rd Column Engineering Consultants
          </p>
          <p className="text-base md:text-lg">P.O.Box 114093, Dubai</p>
          <p className="text-base md:text-lg">U.A.E</p>
        </div>
        <div className="flex flex-col text-gray-700">
          <p className="text-base md:text-lg">
            <span className='text-orange-400'>E-mail:</span> info@tceconsultants.ae
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
      <div className="md:w-1/2 p-8">
        <img className='rounded-lg' src="/04-mombasa-01.jpg" alt="" />
      </div>
      {/* <div className="md:w-1/2 p-8">
        <h3 className="text-xl md:text-2xl text-gray-800 mb-4 font-semibold">
          Send Us a Message
        </h3>
        <form className="space-y-4 sm:space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              placeholder='Name'
              type="text"
              id="name"
              name="Name"
              className="w-full md:w-1/2 bg-gray-100 p-2 rounded-md text-gray-800"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              placeholder='Phone'
              type="tel"
              id="phone"
              name="Phone"
              className="w-full md:w-1/2 bg-gray-100 p-2 rounded-md text-gray-800"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="Email"
              className="w-full bg-gray-100 p-2 rounded-md text-gray-800"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <textarea
              placeholder='Message'
              id="message"
              name="Message"
              rows={4}
              className="w-full bg-gray-100 p-2 rounded-md text-gray-800"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div> */}
    </section>
  );
}

export default ContactUs;
