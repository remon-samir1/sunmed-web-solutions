"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection2 = () => {
  const [resize  , setResize] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize" , ()=> setResize(window.innerWidth))
     return ()=> window.removeEventListener("resize" , ()=> setResize(window.innerWidth))
  },[window.innerWidth])
  const sectionRef = useRef(null);

  const BoxesData = [
    {
      id: 1,
      title: "UI Design",
      description:
        "We craft user focused designs that combine creativity, functionality, and seamless experiences.",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "We build fast, scalable, and secure websites & apps tailored to your business goals.",
    },
    {
      id: 3,
      title: "Web Apps",
      description:
        "We create custom WordPress websites that are easy to manage, fast, and fully responsive.",
    },
    {
      id: 4,
      title: "UX Design",
      description:
        "We design smooth and intuitive experiences that delight your users.",
    },
  ];

  useGSAP(() => {
    const boxes = sectionRef.current.querySelectorAll(".service-box");
    const texts = sectionRef.current.querySelectorAll(".service-text");

    // Boxes animation - smooth (no scale)
    gsap.fromTo(
      boxes,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Texts animation
    gsap.fromTo(
      texts,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div className="px-[5%] py-20" ref={sectionRef}>
      <div className="text-center mb-10">
        <p className="text-main font-medium text-[1.1rem]">Our Work Project</p>
        <h3 className="text-[1.9rem] font-semibold text-white">
          Explore Your Design Project​
        </h3>
      </div>

      <div className="mt-10 relative z-50">
        {/* Navigation buttons */}
        <div className="left-btn absolute top-[110%] left-[38%]  md:left-[-5%] md:top-1/2 z-50 rounded-full border border-stroke cursor-pointer hover:bg-opacity-60 duration-200 bg-[#27284B] h-[3rem] w-[3rem] flex justify-center items-center">
          <IoIosArrowBack className="text-white w-5 h-5" />
        </div>
        <div className="right-btn absolute md:right-[-5%] top-[110%] left-[52%] md:top-1/2 z-50 rounded-full border border-stroke cursor-pointer hover:bg-opacity-60 duration-200 bg-[#27284B] h-[3rem] w-[3rem] flex justify-center items-center">
          <IoIosArrowBack className="text-white w-5 h-5 rotate-180" />
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={resize > 820 ? 4 : 1.2}
          navigation={{ nextEl: ".right-btn", prevEl: ".left-btn" }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {BoxesData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link href='/projects/details' className="service-box  relative border border-stroke p-3 w-full h-[26rem] overflow-hidden rounded-2xl shadow-lg cursor-pointer flex justify-center items-center group transition-all duration-700 z-10">
                {/* Background image */}
                <img
                  src="/project-ex.png"
                  className="absolute h-full w-full top-0 left-0 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay */}
                <div
                  className="z-20 absolute top-[50%] left-0 w-full h-full p-6 transition-all duration-700 group-hover:top-0 group-hover:bg-[#1f203c]/90"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(12, 3, 70, 0.4) -52.21%, #1F203C 59.67%)",
                  }}
                >
                  <h3 className="service-text text-[1.3rem] text-white font-bold mb-2 transform transition-all duration-700 group-hover:translate-y-[-8px] group-hover:text-main">
                    {data.title}
                  </h3>
                  <p className="service-text text-[0.9rem] text-gray-300 mb-3 opacity-90 transition-all duration-700 group-hover:translate-y-[-6px] group-hover:text-white">
                    {data.description}
                  </p>
                  <button className="service-text mt-2 text-white border-b border-b-white group-hover:text-main group-hover:border-main transition-colors duration-500">
                    View details
                  </button>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 group-hover:shadow-[0_0_35px_rgba(0,200,255,0.6)]"></div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsSection2;
