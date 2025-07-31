import React from "react";
import Member from "./Member";
import { SocialIcon } from "react-social-icons";

const members = [
  {
    name: "Laavernnesh Sharma",
    image: "/Hari.jpeg",
    line: "Events and Facility Consultant",
    post: "Managing Director",
    linkedin: "https://www.linkedin.com/in/hari-anandan-31697516/",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-200 h-100 pb-6">
      <div className="base-color h-16 bg-gray-800 md:hidden"></div>
      <h1 className="text-center text-3xl font-helvetica-neue tracking-wider font-light py-4 text-gray-800">
        THE TEAM
      </h1>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            image={member.image}
            line={member.line}
            post={member.post}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
