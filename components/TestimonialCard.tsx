import React from 'react'

interface Testimonial {
    name: string;
    quote: string;
    visible: boolean;
}

const TestimonialCard = ({ name, quote, visible }: Testimonial) => {

  const cardStyles = {
    transition: 'transform 0.5 ease-in-out',
    transform: visible ? 'translateX(0)' : 'translateX(100%)',
    willChange: 'transform'
  };

  return (
    visible && (
        <div className="bg-white p-6 md:p-8 m-4 rounded-2xl shadow-md" style={cardStyles}>
            <div className='grid justify-center'>
            <p className="text-center text-black font-semibold mt-4">{name}</p>
            </div>

          <p className="text-center text-gray-600">{quote}</p>

        </div>
      )

  )
}

export default TestimonialCard
