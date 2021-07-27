import React from "react";
import PageTitle from "../general/titles/PageTitle";

export default function BioPage() {
  return (
    <div className="min-h-screen p-5 content mb-12 ">
      <div
        className="mt-14 flex flex-col items-center justify-center pt-2"
        id="about_me_section"
      >
        <PageTitle title="Hi, my name is Seth" />
        <span className="mt-0">
          <img
            className="rounded-full w-48 h-48 lg:w-56 lg:h-56 z-0"
            src="Profile_Pic.jpeg"
            alt="Seth Bradshaw"
          />
        </span>
        <div className="mt-10 flex flex-col items-center text-center p-5 sm:p-8">
          <p className="text-white text-lg mb-10 w-full lg:w-2/3">
            I am a compassionate, caring person who loves to make others happy
            and improve their lives. There is a very big soft spot in my heart
            for all animals, especially dogs. I truly believe humans have a lot
            to learn from them. I am an avid sports fan of the Utah Jazz and
            Philadelphia Eagles, and enjoyed participating in sports throughout
            my life. I’ve been drawn to technology and science from a very young
            age, which ultimately led to me finding a career in those fields. I
            am so fortunate to have found software engineering, I’ve found it to
            be the perfect medium for me to exercise my creative problem solving
            skills, and explore new challenging ideas, while building products
            that make a positive impact in others lives.
          </p>
          <p className="text-white text-lg mb-10 w-full lg:w-2/3">
            In the summer of 2020, I was working from home due to a global
            pandemic as a Customer Service Representative for Bed Bath and
            Beyond. One day while my computer was booting up and I’m preparing
            for the start of my shift, I thought to myself “I’m going to be
            doing this for another 4 years”. The thought made my skin crawl. The
            plan at the time was to get a four year degree in Computer Science,
            then begin my career. Once my computer booted up, I checked my email
            and was informed that the entire customer service team will be
            outsourced in 2 months. After the initial shock settled in, I
            decided then and there that in 2 months I was concluding my final
            job of not being a software engineer. After much thought, I found
            Lambda school, and decided that it would be the fastest means to get
            a quality education and find a job as a Software Engineer. I loved
            my time at Lambda, I found some great friends, learned vital
            technologies modern Web Developers need under their belt, and more
            importantly I discovered how much I love learning, and it opened up
            a thirst for knowledge that will never be quenched.
          </p>
          <p className="text-white text-lg w-full lg:w-2/3">
            As far as my ultimate career goals, I plan to pursue a double major
            in Physics and Computer Science at ASU. The climate crisis is the
            biggest threat to life that humans have seen, so as someone who
            cherishes all life I want to work with like minded individuals in
            green energy, or astrophysics to help resolve these issues. Although
            the future may seem grim, I have taken it a personal responsibility
            to help make this world a better home for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
