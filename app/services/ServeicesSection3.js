"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServeicesSection3 = () => {
  const [resize  , setResize] = useState(window.innerWidth);
  useEffect(()=>{
    if (typeof window !== "undefined") {
      
      window.addEventListener("resize" , ()=> setResize(window.innerWidth))
      return ()=> window.removeEventListener("resize" , ()=> setResize(window.innerWidth))
    }
  },[])
  const sectionRef = useRef(null);

  const BoxesData = [
    {
      id: 1,
      icon: "fluent:design-ideas-16-filled",
      title: "UI Design",
      description:
        "We craft user focused designs that combine creativity, functionality, and seamless experiences.",
    },
    {
      id: 2,
      icon: "material-symbols:code-rounded",
      title: "Web Development",
      description:
        "We build fast, scalable, and secure websites & apps tailored to your business goals.",
    },
    {
      id: 3,
      icon: "mdi:application-cog-outline",
      title: "Web Apps",
      description:
        "We create custom WordPress websites that are easy to manage, fast, and fully responsive.",
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-box", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="px-[5%] py-20">
      <div className="flex justify-center flex-col items-center gap-4">
        <h3 className="text-main text-base">What we offer</h3>
        <p className="max-w-[750px] font-medium text-white text-[1.9rem] text-center">
          Explore our full range of web solution services designed to help your
          business grow.
        </p>
      </div>

      <div className="mt-10 relative">
        <div className="left-btn absolute left-[-5%] top-1/2 rounded-full border border-stroke cursor-pointer hover:bg-opacity-60 duration-200 bg-[#27284B] h-[3rem] w-[3rem] !flex justify-center items-center ">
          <IoIosArrowBack className="text-white w-5 h-5" />
        </div>
        <div className="right-btn absolute right-[-5%] top-1/2 rounded-full border border-stroke cursor-pointer hover:bg-opacity-60 duration-200 bg-[#27284B] h-[3rem] w-[3rem] !flex justify-center items-center ">
          <IoIosArrowBack className="text-white w-5 h-5 rotate-180" />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={resize > 820 ? 3 : 1}

          navigation={{ nextEl: ".right-btn", prevEl: ".left-btn" }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {BoxesData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link href='/services/details' className="service-box border p-3 flex-col border-stroke group  w-full h-[22rem] relative overflow-hidden rounded-2xl shadow-lg cursor-pointer flex justify-center items-center gap-4">
                <Image 
                  alt="sunmed"
                  width={100}
                  height={100}
                  src="/servicesBox.png"
                  className="absolute h-[94%] w-[94%] top-1/2 left-1/2 translate-x-[-50%] rounded-xl translate-y-[-50%]  object-cover "
                />
                <div className="w-[4.2rem] h-[4.5rem] rounded-lg bg-main flex justify-center items-center">
                  <Icon
                    icon={data.icon}
                    width="40"
                    height="40"
                    style={{ color: "#000" }}
                  />
                </div>
                <h3 className="text-[1.7rem] text-white font-medium">
                  {data.title}
                </h3>
                <p className="text-base text-body max-w-[70%] text-center">
                  {data.description}
                </p>
                <button className="flex items-center justify-center gap-3 bg-main py-2 px-6 rounded duration-300 hover-main mt-4">
                  <span className="text-black text-base font-semibold">
                    Learn more
                  </span>
                  <Icon
                    icon="teenyicons:arrow-solid"
                    width="16"
                    height="16"
                    style={{ color: "#000" }}
                    className="rotate-90"
                  />
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServeicesSection3;
