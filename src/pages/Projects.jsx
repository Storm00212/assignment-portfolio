import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Projects = () => {
  const projRef = useRef(null);

  useEffect(() => {
    gsap.from(projRef.current.querySelectorAll(".fade-in"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={projRef}
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      {/* Title */}
      <h1 className="fade-in text-4xl sm:text-5xl font-bold text-center text-green-400 drop-shadow-lg mb-10">
        My Projects & Experience
      </h1>

      {/* Software Projects */}
      <h2 className="fade-in text-2xl font-semibold text-gray-300 mb-6">
        💻 Software Projects
      </h2>
      <div className="fade-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-green-400">React Chat App</h3>
          <p className="mt-2 text-gray-300">
            A real-time chat application built with React and backend services.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400">AI Fitness Planner</h3>
          <p className="mt-2 text-gray-300">
            AI-powered web app that generates personalized workout & diet plans.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-accent">Ulinzi App</h3>
          <p className="mt-2 text-gray-300">
            Backend developer for an app providing SOS alerts and danger
            monitoring for personal security.
          </p>
        </div>
      </div>

      {/* Electronics Projects */}
      <h2 className="fade-in text-2xl font-semibold text-gray-300 mb-6">
        ⚡ Electronics Projects
      </h2>
      <div className="fade-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-green-400">
            Temp & Humidity Sensor
          </h3>
          <p className="mt-2 text-gray-300">
            IoT project for monitoring environmental conditions in real-time.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400">
            Arduino Home Automation
          </h3>
          <p className="mt-2 text-gray-300">
            A smart home system to control appliances remotely with Arduino.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-accent">
            Vending Machine Controller
          </h3>
          <p className="mt-2 text-gray-300">
            Digital electronics project to control a vending machine using logic
            circuits.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-pink-400">
            Sound Amplifier & Filter
          </h3>
          <p className="mt-2 text-gray-300">
            Designed and tested an amplifier with filters at Dedan Kimathi
            University labs.
          </p>
        </div>
      </div>

      {/* Experience */}
      <h2 className="fade-in text-2xl font-semibold text-gray-300 mb-6">
        🌍 Experience & Involvement
      </h2>
      <div className="fade-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-green-400">
            QA/QE Trainee @ Teach2Give
          </h3>
          <p className="mt-2 text-gray-300">
            Training in software quality assurance & engineering practices.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400">
            Hackathon Participant
          </h3>
          <p className="mt-2 text-gray-300">
            Currently tackling agricultural problems with innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
