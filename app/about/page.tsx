import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-slate-100 text-gray-800 min-h-screen p-8 flex flex-col items-center ">
      <div className=" grid grid-rows-1 gap-4 ">
        <div className="bg-white mb-24 rounded shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-col md:flex-row  items-center">
          <Image
            className="h-52 rounded-full md:rounded-lg mt-12 shadow border-solid border-4 md:mb-12 md:ml-24 border-rose-400"
            src="/profilephoto.jpeg"
            alt="close"
            width={200}
            height={200}
          />

          <p className="text-lg text-gray-700 px-2 md:px-0 text-center m-8 md:mr-24">
            I am a passionate computer science engineer with a keen enthusiasm
            for learning and implementing cutting-edge technologies to create
            innovative products. As a software developer, I thrive on the
            creative journey of transforming conceptual ideas into functional
            features. My approach involves a love for problem-solving, and I
            excel in breaking down complex requirements into manageable tasks.
            Currently seeking my next opportunity, I am driven by a commitment
            to continuous learning, personal growth, and making meaningful
            contributions to any project or team I engage with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
