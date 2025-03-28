"use client";


import { motion } from "framer-motion";

export default function Hero() {

  return (
    <main>
          {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-16 md:py-32 bg-cover bg-center bg-no-repeat bg-opacity" style={{ backgroundImage: "url('/img.jpg')" }}>
        <div className="absolute inset-0 bg-grey-300 bg-opacity-0"></div>
        <motion.div className="relative z-10 px-6 py-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg max-w-lg"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}

                >
                    <h2 className="text-3xl md:text-4xl text-blue-700 rounded-lg font-bold mb-4">Connect with Alumni</h2>
                    <p className="text-lg text-blue-600 mb-6">Stay connected, join events, and grow your network.</p>
                    <motion.a 
                        href="/register" 
                        className="bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-200" 
                        initial={{ scale: 0.9 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        Join Now
                    </motion.a>
                </motion.div>
            </section>
        </main>
    );
}
