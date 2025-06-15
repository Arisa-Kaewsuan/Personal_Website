import Link from "next/link";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div className="py-10 px-10 md:px-24 lg:px-96">
      <header className="flex flex-row justify-between items-center cursor-pointer">
        <Link href="/" className="text-2xl font-black">
          MAPLE
        </Link>

        <div className="flex gap-4 md:gap-6">
          <a
            href="#notes"
            className="cursor-pointer hover:text-gray-700 text-lg"
          >
            Notes
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-gray-700 text-lg"
          >
            Projects
          </a>
        </div>
      </header>

      <section className="mt-10">
        {/* Map with Soft Gradient Overlay */}
        <div className="w-full h-40 rounded-t-xl relative overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126555.31183471679!2d99.5767114473666!3d7.590920196260564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8c352a48d387%3A0x807b2b3d859ebb88!2z4LiV4Lij4Lix4LiH!5e0!3m2!1sth!2sth!4v1750001093658!5m2!1sth!2sth"
            width="100%"
            height="160"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-t-xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-t-xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/100 rounded-t-xl pointer-events-none"></div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="rounded-full border-2 w-[100px] h-[100px] p-1 border-gray-700">
            <Image
              src="/favicon.ico"
              alt="Profile picture"
              width={100}
              height={100}
            />
          </div>

          <div>
            <h1 className="font-semibold text-2xl mt-2">Hi, I'm Maple 👋</h1>
            <div className="flex flex-row items-center gap-4 mt-2">
              <div className="bg-green-500 w-2 h-2 rounded-full "></div>
              <p>Open to Work</p>
            </div>
          </div>
        </div>

        <p className="mt-6">
          I am a driven full-stack developer with hands-on experience in RESTful
          APIs, Node.js, React, MongoDB, and PostgreSQL. I'm seeking a junior
          full-stack role where I can contribute to building scalable, reliable
          web applications and write clean, maintainable code that supports
          company growth. I live in Trang, Thailand but am open to relocating.
        </p>

        <div className="mt-6 flex flex-row flex-wrap gap-4">
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <RiJavascriptFill className="text-2xl hover:text-[#f7e025] mb-2 hover:text-3xl" />
            <p>Javascript</p>
          </div>
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <FaReact className="text-2xl hover:text-[#81e0ff] mb-2 hover:text-3xl" />
            <p>React.js</p>
          </div>
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <SiNextdotjs className="text-2xl hover:text-[#1f2020] mb-2 hover:text-3xl" />
            <p>Next.js</p>
          </div>
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <RiTailwindCssFill className="text-2xl hover:text-[#1dc0cd] mb-2 hover:text-3xl" />
            <p>TailwindCSS</p>
          </div>
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <BiLogoPostgresql className="text-2xl hover:text-[#396c94] mb-2 hover:text-3xl" />
            <p>PostgreSQL</p>
          </div>
          <div className="border border-gray-400 cursor-pointer px-4 py-4 rounded-md flex flex-col justify-center items-center">
            <FaGithubSquare className="text-2xl hover:text-[#422e6f] mb-2 hover:text-3xl" />
            <p>Github</p>
          </div>
        </div>
      </section>

      <h1
        id="projects"
        className="w-fit border border-gray-300 mt-20 rounded-md px-4 bg-gray-700"
      >
        My Projects
      </h1>
      <section className="md:grid md:grid-cols-2 md:gap-4 md:mt-4">
        <div className="p-4 rounded-md border border-gray-800 mt-4">
          <Image
            src="/neatly.png"
            alt="Neatly Hotel Booking Website"
            width={400}
            height={160}
            className="w-full h-40 rounded-md object-cover"
            priority={true}
            quality={90}
          />
          <p className="text-lg font-semibold my-4">Neatly</p>
          <p className="mb-6">
            Full-stack Hotel Booking Website like Agoda with Hotel Management
            System featured. Built with modern web technologies including
            Next.js, TailwindCSS, Supabase, Prisma.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://neatly-lemon.vercel.app/"
              className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
            >
              website
            </Link>
            <Link
              href="https://github.com/ritchie-gr8/neatly"
              className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
            >
              github
            </Link>
          </div>
        </div>

        <div className="p-4 rounded-md border border-gray-800 mt-4">
          <Image
            src="/personal-blog.png"
            alt="Neatly Hotel Booking Website"
            width={400}
            height={160}
            className="w-full h-40 rounded-md object-cover"
            priority={true}
            quality={90}
          />
          <p className="text-lg font-semibold my-4">Personal Blog (On Going)</p>
          <p className="mb-6">
            Full-stack blogging platform with Content Management System
            featured. Built with modern web technologies including React.js,
            TailwindCSS, and Express.js.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://maple-personal-blog.vercel.app/"
              className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
            >
              website
            </Link>
            <Link
              href="https://github.com/Arisa-Kaewsuan/maple-personal-blog"
              className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
            >
              github
            </Link>
          </div>
        </div>

        <div className="p-4 rounded-md border border-gray-800 mt-4">
          <Image
            src="/tourist.png"
            alt="Neatly Hotel Booking Website"
            width={400}
            height={160}
            className="w-full h-40 rounded-md object-cover"
            priority={true}
            quality={90}
          />
          <p className="text-lg font-semibold my-4">Tourist (On Going)</p>
          <p className="mb-6">
            Full-stack Tourist Attraction Explorer featuring React.js frontend
            with debounced search functionality and responsive TailwindCSS
            design{" "}
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Arisa-Kaewsuan/react-tourist-attraction-mini-project"
              className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
            >
              github
            </Link>
          </div>
        </div>

        <div className="p-4 rounded-md border border-gray-800 mt-4">
        <Image
            src="/healthcare.png"
            alt="Neatly Hotel Booking Website"
            width={400}
            height={160}
            className="w-full h-40 rounded-md object-cover"
            priority={true}
            quality={90}
          />
          <p className="text-lg font-semibold my-4">CarePulse (On Going)</p>
          <p className="mb-6">
          Healthcare Management System featuring secure patient authentication, real-time communication between healthcare providers and patients, and automated notification workflows. Built with modern stack including React.js for interactive frontend, TailwindCSS for responsive UI, and Express.js for scalable backend services.
          </p>
          
        </div>
      </section>

      <h1
        id="notes"
        className="w-fit border border-gray-300 mt-20 rounded-md px-4 bg-gray-700"
      >
        My Notes
      </h1>
      <section className="md:grid md:grid-cols-2 md:gap-4 md:mt-4">
        <div className="p-4 rounded-md border border-gray-800 mt-4">
        <Image
            src="/webdev.png"
            alt="Neatly Hotel Booking Website"
            width={400}
            height={160}
            className="w-full h-40 rounded-md object-cover"
            priority={true}
            quality={90}
          />
          <p className="text-lg font-semibold my-4">Road to Full-Stack Web Developer 🛣️</p>
          <p className="mb-6">
          Full-Stack Developer Notes - Tech stacks, tools & best practices for reference
          </p>

          <Link
            href="https://docs.google.com/document/d/1QhlVRhaJbnlqaqddpwCdQ_LIyGpFFgI8tsmWGhIYkZA/edit?usp=sharing"
            className="p-2 border rounded-md hover:text-gray-800 hover:border-gray-800"
          >
            Read
          </Link>
        </div>
      </section>

      <footer className="mt-10 flex items-center justify-between">
        <div className="flex gap-6">
          <Link
            href="https://github.com/Arisa-Kaewsuan"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <FaGithubSquare />
            <p>Github</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/arisa-kaewsuan/?locale=en_US"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </Link>

          <Link
            href="https://discord.com/users/1307190822248382550"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <FaDiscord />
            <p>Contact me on Discord!</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
