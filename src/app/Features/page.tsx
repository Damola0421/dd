"use client";


import { motion } from "framer-motion";
import {FaUsers, FaBriefcase, FaRegCalendarCheck } from "react-icons/fa";
import Navbar from "../component/Navbar";


export default function Features() {
  return (
    <main>
      <Navbar/>
        {/* Features Section */}
      <section className="py-23 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ icon: FaUsers, title: "Networking", text: "Connect with alumni and expand your network." },
            { icon: FaBriefcase, title: "Job Board", text: "Access exclusive job opportunities." },
            { icon: FaRegCalendarCheck, title: "Events", text: "Stay informed about alumni gatherings." }
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div key={i} className="bg-white p-9 rounded-lg shadow-lg border transition-transform transform hover:scale-105" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }}>
              <Icon className="text-blue-600 text-5xl mb-3 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
              <p className="text-gray-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
