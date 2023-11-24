import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-slate-100 text-gray-800 min-h-screen p-8 flex flex-col items-center ">
      <div className=" grid grid-rows-1 gap-4 ">
        <div className="bg-white mb-24 mx-12 rounded shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-col md:flex-row  items-center">
          <Image
            className="h-52 rounded-full md:rounded-lg mt-12 shadow border-solid border-4 md:mb-12 md:ml-24 border-rose-400"
            src="/profilephoto.jpeg"
            alt="close"
            width={200}
            height={200}
          />

          <p className="text-lg text-gray-700 px-2 md:px-0 text-center m-8 md:mr-24 md:ml-24">
            <h2 className="text-3xl md:text-left text-gray-600 my-12">
              Get in touch!
            </h2>
            <ul>
              <li>Email: manjiripathak01@gmail.com</li>
              <div className="flex gap-4 mb-12">
                <Link
                  href="https://github.com/manjiripathak16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white px-8 py-2 hover:bg-blue-50 text-black border-2 border-slate-300  rounded-md mt-4">
                    GitHub
                  </button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/manjiri-pathak-5529971b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-7 py-2 rounded-md mt-4">
                    Linkedin
                  </button>
                </Link>
              </div>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
