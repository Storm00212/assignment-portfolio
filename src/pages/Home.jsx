import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(containerRef.current.querySelectorAll(".fade-in"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-x"></div>

      <div className="relative z-10">
        <h1 className="fade-in text-5xl sm:text-6xl font-extrabold tracking-tight text-green-400 drop-shadow-lg">
          Paul Muyali
        </h1>

        <p className="fade-in mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          A passionate developer crafting interactive and modern web experiences 🚀  
          Dive in to explore my journey, projects, and collaborations.
        </p>
        <div className="fade-in mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="btn btn-success btn-wide shadow-lg hover:scale-105 transition-transform"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="btn btn-outline btn-accent btn-wide hover:scale-105 transition-transform"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="btn btn-warning btn-wide hover:scale-105 transition-transform"
          >
            Contact
          </Link>
        </div>
        <div className="fade-in mt-16 grid gap-8 sm:grid-cols-3">
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-xl font-bold text-green-400">💻 Projects</h3>
            <p className="mt-2 text-gray-300">
              See my latest web apps, designs, and interactive builds.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-xl font-bold text-accent">👨‍💻 About Me</h3>
            <p className="mt-2 text-gray-300">
              Learn more about my skills, experience, and passions.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-xl font-bold text-yellow-400">📬 Contact</h3>
            <p className="mt-2 text-gray-300">
              Let’s collaborate or just have a chat — reach out!
            </p>
          </div>
        </div>

        {/* Animated scroll hint */}
        <div className="fade-in mt-12 animate-bounce text-gray-400">
          ↓ Start Exploring ↓
        </div>
      </div>
    </div>
  );
};

export default Home;
