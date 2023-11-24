import React from "react";
import Link from "next/link";

const projects = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 flex flex-col items-center justify-center">
      {/* <h1 className="text-3xl mb-4 text-center text-rose-400">PROJECTS</h1> */}

      <div className="max-w-3xl  flex flex-col gap-4 justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">User Authentication</h2>
          <p>
            A full-stack production level solution for user signup and login.
            Features include Login, SignUp, Password encryption.
          </p>
          <h3 className="mt-2">Tech Stack</h3>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>TypeScript, Axios</li>
          </ul>
          <Link
            href="https://github.com/manjiripathak16/User-Authentication"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md mt-4">
              View on GitHub
            </button>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 ease-in-out ">
          <h2 className="text-xl font-bold mb-2">
            Author's Portfolio (Freelnace project)
          </h2>
          <p>
            An author's portfolio website to display their work in a clean and
            creative way. The design is fully responsive.
          </p>
          <h3 className="mt-2">Tech Stack</h3>
          <ul className="list-disc list-inside">
            <li>ReactJS</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <Link
            href="https://www.alka-deshpande.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-rose-50 text-black border-2 border-rose-300 mt-4 mr-4 px-4 py-2 rounded-md ">
              View Website
            </button>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            Image Synthesis from Themes Captured in Poems using Latent Diffusion
            Models (Research Project)
          </h2>
          <p>
            Worked with transformer models (NLP) and Latent Diffusion models to
            extract thematic elements and metaphors from poetry, using these
            insights to generate images that visually represent the text.
          </p>
          <Link
            href="https://ieeexplore.ieee.org/document/10141274"
            target="_blank"
            rel="noopener"
          >
            <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md mt-4">
              IEEE Paper
            </button>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            My Personal Portfolio (this website)
          </h2>
          <p>
            A responsive website that showcases my projects, skills and work
            experience. A website that serves as a digital resume.
          </p>
          <h3 className="mt-2">Tech Stack</h3>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
          <Link
            href="https://github.com/manjiripathak16/manjiri-pathak-portfolio"
            target="_blank"
            rel="noopener"
          >
            <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md mt-4">
              View on GitHub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projects;
