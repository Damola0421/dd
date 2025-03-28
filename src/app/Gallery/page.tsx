"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../component/Navbar";


export default function Gallery() {
    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img3.jpg",
        "/img2.jpg",
        "/img1.jpg",
        "/img.jpg",
        "/img1.jpg",
    ];

    return (
        <main>
            <Navbar/>
            {/* Gallery Section */}
            <section className="py-23 px-6 bg-white text-center">
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">Gallery</h3>
                <div className="w-full max-w-5xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="rounded-lg shadow-lg"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-100"> {/* Increased height */}
                                <Image 
                                    src={src} 
                                    alt={`Gallery image ${index + 1}`} 
                                    width={800} 
                                    height={600} 
                                    className="rounded-lg w-full h-auto object-cover" 
                                />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
