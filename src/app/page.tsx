/* eslint-disable react/no-unescaped-entities */
import AboutMe from "@/components/AboutMe";
import HeroPhoto from "@/components/HeroPhoto";
import NavBar from "@/components/NavBar";
import ProjectsList from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-center max-w-6xl mx-auto p-10 sm:py-20">
      <HeroPhoto />

      <div className="mt-6 sm:mt-0 sm:ml-20 flex flex-col justify-center">
        <h3 className="text-4xl font-light">
          Hello there, <b className="font-medium text-bold">I'm</b>
        </h3>
        <h2 className="text-7xl font-medium text-purple-600 mt-2">Will.</h2>

        <p className="mt-3 text-xl">
          I'm a{" "}
          <span className="font-medium text-purple-600">computer science</span>{" "}
          major studying at the University of Colorado Boulder.
        </p>
        <NavBar />
      </div>
    </div>
  );
}
