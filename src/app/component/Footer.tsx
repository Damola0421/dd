"use client";

import {  FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {;
  return (
    <main>
        {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
            <p className="text-gray-400">The Alumni Portal helps you stay connected, find jobs, and join events.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <p><a href="/Home" className="hover:text-blue-400">Home</a></p>
            <p><a href="/Gallery" className="hover:text-blue-400">Gallery</a></p>
            <p><a href="#" className="hover:text-blue-400">Events</a></p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 " >
             <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a> 
             <a href="#" className="hover:text-blue-700"><FaFacebook size={24} /></a>
             <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
             <a href="#" className="hover:text-red-400"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <p className="mt-6">© 2025 Alumni Portal. All rights reserved.</p>
      </footer>
    </main>
  );
}
