import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100 text-gray-800 min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-5xl bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-8 text-center relative flex flex-col md:flex-row items-center">
        <Image
          className="w-48 md:w-56 ml-0"
          src="/hello.png"
          alt="close"
          width={200}
          height={200}
        />

        <div className="justify-center text-center md:text-right md:mr-32 md:my-32 md:ml-16">
          <p className="text-5xl font-bold text-gray-800 md:mb-3 p-4 md:p-0">
            Hello, I'm <span className="text-rose-400">Manjiri</span>
          </p>
          <p className="text-lg text-gray-700 px-4 md:px-0">
            A Computer Science Engineer and full-stack developer skilled in
            crafting dynamic and responsive web applications. Actively seeking
            new opportunities, I thrive on learning and contributing to
            impactful projects that embrace innovation.
          </p>
          <div className="flex flex-col md:flex-row justify-end gap-2 p-4 md:px-0">
            <Link href="/projects" rel="noopener">
              <button className="btn-primary bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
                PROJECTS
              </button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/19BTanCDs1PpiTVuY0Do3xkc5ryKRWM2C/view?usp=drive_link"
              target="_blank"
              rel="noopener"
            >
              <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md ">
                VIEW MY RESUME
              </button>
            </Link>
            <Link href="/contact" rel="noopener">
              <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md ">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-8 text-center relative flex flex-col md:flex-row md:gap-8 items-center">
        <div className="flex flex-col">
          <div className="justify-center text-center md:text-left md:ml-32 ">
            <h2 className="text-3xl text-gray-600 my-12">
              Work Experience & Education
            </h2>
            <p className="text-2xl text-gray-800 font-bold">
              SDE Intern at{" "}
              <span className="text-2xl text-rose-400 font-bold">Amazon</span>
            </p>
            <p className="text-md text-gray-700 px-4 md:px-0">
              Worked in the Consumer Payments organization under the Shop with
              Points Tech Team from Jan-June’23.
            </p>
            <Link
              href="https://drive.google.com/file/d/1j7n9Ofy-k_iIfZIddVb2GAXtjYZaXXra/view?usp=drive_link"
              target="_blank"
              rel="noopener"
            >
              <button className="btn-primary bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-2 rounded-md mb-8 mt-2">
                Learn More
              </button>
            </Link>
          </div>

          <div className="justify-center text-center md:text-left md:ml-32 md:mb-16">
            <p className="text-xl text-gray-600 font-semibold">
              PES University, Bangalore
            </p>
            <p className="text-md text-gray-700">
              Bachelors in Technology in Computer Science Engineering
            </p>
            {/* <button className="btn-primary bg-white border-2 border-slate-300 hover:bg-blue-100 text-black px-2 rounded-md mt-2">
              Learn More
            </button> */}
          </div>
        </div>
        <Image
          className="md:mr-20 p-4 ml-6 md:p-0 md:ml-0"
          src="/reading.png"
          alt="close"
          width={200}
          height={200}
        />
      </div>

      <div className="max-w-5xl bg-white md:pr-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-8 text-center relative flex flex-col md:flex-row items-center">
        <Image
          className="w-48 md:w-56 md:ml-32"
          src="/laptop wave.png"
          alt="close"
          width={200}
          height={200}
        />

        <div className="justify-center gap-2 mr-0 text-center md:text-left md:ml-32">
          <h2 className="text-3xl text-gray-600 md:ml-4 my-12">My Skills</h2>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            HTML
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            CSS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            JavaScript
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            TypeScript
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            ReactJS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            NextJS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            NodeJS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            ExpressJS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            Tailwind CSS
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            Java
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            C++
          </button>
          <button className="btn-primary md:ml-4 mb-4 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            Docker
          </button>
          <button className="btn-primary md:ml-4 mb-16 bg-white hover:bg-rose-50 text-black border-2 border-rose-300 px-4 py-2 rounded-md">
            Data Structures & Algorithms
          </button>
        </div>
      </div>

      <div className="max-w-5xl bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-8 text-center relative flex flex-col md:flex-row  md:gap-8 items-center">
        <Image
          className="ml-0 mt-8 md:ml-16 md:mt-1"
          src="/studying.png"
          alt="close"
          width={250}
          height={250}
        />
        <div className="text-center md:text-right md:ml-4 md:mr-8">
          <p className="text-3xl text-gray-600 mt-8 md:mr-12 md:mt-12">
            PHILOSOPHY
          </p>

          <p className="text-lg mt-4 ml-0 p-4 md:p-0 text-gray-700 md:mx-12 text-center md:text-right">
            Inspired by the quest for adding value to every endeavor, I am
            driven by the ambition to unravel captivating challenges through my
            efforts. To me, the journey of conceiving an idea, dedicating
            diligent effort, fostering collaboration, acquiring knowledge, and
            ultimately creating something from nothing is profoundly
            exhilarating. Working on new technologies has proved to be the
            perfect avenue for embracing and honing this transformative process.
          </p>
          <Link href="/about" rel="noopener">
            <button className="bg-white hover:bg-blue-50 text-black border-2 border-slate-300 px-4 py-2 rounded-md md:mr-12 mt-4 mb-12">
              More About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
