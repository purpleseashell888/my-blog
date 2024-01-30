import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
              Hello, I am{" "}
            </span>
            <br></br>
            Lili
          </h1>
          <p className="text-[#4e4f4f] dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a fresh person in front-end development. I practice my ability
            through the projects.
          </p>
          <div>
            <a
              target="_blank"
              href="/about/resume.pdf"
              className="ml-15 px-8 py-3 text-2xl w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-purple-500 to-pink-600 hover:bg-white dark:hover:bg-slate-800 text-white dark:text-white "
            >
              Resume
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-white dark:bg-white w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
