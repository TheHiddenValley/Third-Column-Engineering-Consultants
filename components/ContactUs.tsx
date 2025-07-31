import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <section
        id="contact"
        className="flex-grow bg-gradient-to-b from-gray-200 to-gray-300 p-8 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2 md:p-12 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
          <h2 className="flex text-3xl text-gray-800 font-semibold mb-4 font-helvetica-neue tracking-wider">
            <BsFillTelephoneFill className="mr-2 opacity-90 text-orange-400" />{" "}
            CONTACT US
          </h2>
          <div>
            <div className="flex flex-col text-gray-700">
              <p className="text-base md:text-lg">
                Laava Events and Facility Consulting
              </p>
              <p className="text-base md:text-lg">P.O.Box 114093, Singapore</p>
              <p className="text-base md:text-lg">Singapore</p>
            </div>

            <div className="flex flex-col text-gray-700">
              <p className="text-base md:text-lg flex">
                <span className="text-orange-400">E-mail: </span>
                <a
                  href="mailto:info@lefconsultants.sg"
                  className="flex items-center text-base md:text-lg hover:text-blue-700"
                >
                  <FaEnvelope className="mr-1 ml-1" /> info@lefconsultants.sg
                </a>
              </p>
              <p className="text-base md:text-lg">
                <span className="text-orange-400">Tel:</span> +65 9856 4877
              </p>
              <p className="text-base md:text-lg">
                <span className="text-orange-400">Mobile no.:</span> +65 9856
                4877
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-10 p-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14431.27820129814!2d55.3853612!3d25.276655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dae9275040b%3A0x7766f9f2b659fe78!2s3rd%20Column%20Engineering%20Consultants!5e0!3m2!1sen!2sae!4v1703852380065!5m2!1sen!2sae"
            width="510"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="bg-gray-300 text-gray-500 text-center p-4">
        Copyright © 2025 LEFConsultants
      </footer>
    </div>
  );
};

export default ContactUs;
