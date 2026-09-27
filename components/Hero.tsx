import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi,I'm ${pageInfo?.name}`,
      "Addicted to surfing the web",
      "I Like eastern music",
      "I like coding 🚀",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-linear-to-tr from-lightBackground to-professionalBlue/5">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover shadow-2xl border-4 border-professionalBlue/30"
        src={pageInfo?.heroImage || "/images/profile-pic.JPG"}
        alt={pageInfo?.name || "Hero image"}
      />

      <div className="z-20 space-y-6">
        <h2 className="text-sm uppercase text-professionalBlue pb-2 tracking-[10px] md:tracking-[15px] font-medium">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10 text-professionalDark">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#34495E" />
        </h1>

        <div className="pt-5 space-x-2">
          <Link href="#about">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">About</button>
          </Link>
          <Link href="#education">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Education</button>  
          </Link>
          <Link href="#experience">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
