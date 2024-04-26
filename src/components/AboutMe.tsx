/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BackButton from "./BackButton";

export default function AboutMe() {
  return (
    <section className="bg-white p-6 md:p-10 rounded-lg shadow-lg mx-4 md:mx-auto max-w-4xl">
      <div className="flex justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
          Get to know me! 👋
        </h2>
        <BackButton href="/" />
      </div>

      <p className="text-gray-700 text-base md:text-lg">
        Hi! My name is <strong>Will Ham</strong>, a senior graduating with a
        Bachelors of Arts in Computer Science and a minor in Creative Technology
        and Design from the University of Colorado Boulder in May 2024. Over the
        course of my four years here at CU, I have honed my skills and expanded
        my knowledge in computer science and creative technology. My time at the
        University of Colorado Boulder has not only equipped me with technical
        proficiency but has also fostered a spirit of innovation and
        entrepreneurship.
      </p>
      <p className="mt-4 text-gray-700 text-base md:text-lg">
        In a previous role as a Software Engineer at Snag Delivery, I made a
        major impact developing innovative solutions such as the internal
        proprietary driver delivery dispatching application, "Nexus". Key
        features I worked on include geolocation of customers and big data
        analytics that transformed operational efficiency. My leadership skills
        were evident when mentoring interns and managing projects from inception
        to completion.
      </p>
      <p className="mt-4 text-gray-700 text-base md:text-lg">
        In my early software engineering days, I helped co-found a sneaker bot
        named <em>Kage AIO</em>. At Kage, I showcased my entrepreneurial drive
        by developing auto checkout modules and analytical APIs, contributing to
        substantial revenue generation. Between all users, there was over $1.5
        million spent and over 100,000 successful checkouts.
      </p>
      <p className="mt-4 text-gray-700 text-base md:text-lg">
        Beyond my professional endeavors, I am passionate about technology
        through personal projects like an AI Icon Generator and a Shopify
        monitor, highlighting my full-stack abilities. Overall, with a strong
        foundation in many languages and technologies including TypeScript, Go,
        Next.js, Firebase, SQL, and more, I am ready to embark on a career path
        marked by innovation and impact.
      </p>
    </section>
  );
}
