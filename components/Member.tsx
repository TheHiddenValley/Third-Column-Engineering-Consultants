import React from 'react'


interface Member {
    name: string;
    image: string;
    post: string;
}

const Member = ({ name, image, post }: Member) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <div className="flex justify-center">
          <img src={image} alt={name} className="rounded-full h-32 w-32 mb-4 outline" />
        </div>
        <h1 className="text-center text-black font-semibold mt-4">{name}</h1>
        <p className="text-center text-gray-600 font-light mt-2">{post}</p>
      </div>
    </div>
  )
}

export default Member
