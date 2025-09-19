import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current.querySelectorAll(".fade-in"), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-950 text-white text-center"
    >
      <div className="fade-in avatar mb-6">
        <div className="w-32 rounded-full ring ring-green-400 ring-offset-2 ring-offset-gray-950 shadow-xl">
          
          <img
            src="/images/profile.jpg"
            alt="Paul Muyali"
          />
        </div>
      </div>
      <h1 className="fade-in text-4xl sm:text-5xl font-bold text-green-400 drop-shadow-lg">
        About Me
      </h1>

      <p className="fade-in mt-4 max-w-2xl text-lg text-gray-300">
        Hi, I’m <span className="text-green-400 font-semibold">Paul Muyali</span>.  
        I’m a developer and electronics enthusiast passionate about building
        interactive applications and hardware solutions. My expertise lies in
        combining <span className="text-green-400">software</span> and{" "}
        <span className="text-green-400">electronics</span> to create powerful,
        real-world systems.
      </p>

      <div className="fade-in mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-green-400">💻 Web Development</h3>
          <p className="mt-2 text-gray-300">MERN Stack, Next.js, JavaScript</p>
        </div>

        <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400">🗄️ Databases</h3>
          <p className="mt-2 text-gray-300">MongoDB, Firebase</p>
        </div>

        <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-accent">⚡ Electronics</h3>
          <p className="mt-2 text-gray-300">
            Digital & Analogue Electronics, Arduino, IoT
          </p>
        </div>
      </div>
      <p className="fade-in mt-12 text-gray-400 italic">
        Always learning, always building 🚀
      </p>
    </div>
  );
};

export default About;
