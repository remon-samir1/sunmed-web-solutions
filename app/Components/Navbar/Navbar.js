"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../Logo/Logo";
import { useGSAP } from "@gsap/react";
// import MenuIcon from "../MenuIcon";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    // Animation on enter
    gsap.fromTo(
      navRef.current,
      { background: "transperant", boxShadow: "none" },
      {
      
        background: "rgba(175, 175, 175, 0.10)",
        backdropFilter: "blur(10px) saturate(1) ",
        boxShadow: "0px 0px 3px rgba(175, 175, 175, 0.50)",
        duration: 5,
        
        ease: "power4.out",
      }
    );

    // Animation on scroll
    // ScrollTrigger.create({
    //   trigger: document.body,
    //   start: "top top",
    //   end: 99999,
    //   onUpdate: (self) => {
    //     gsap.to(navRef.current, {
    //       backgroundColor:
    //         self.direction === 1
    //           ? "#54eecd81" // scrolling down
    //           : "rgba(175, 175, 175, 0.10)", // scrolling up
    //       // width: self.direction === 1 ? '85%' : '90%',
    //       backdropFilter: self.direction === 1 ? "blur(10px)" : "blur(0px)",
    //       // borderRadius:self.direction === 1 ? '70px' : '10px',
    //       // boxShadow:
    //       //   self.direction === 1
    //       //     ? "0px 0px 12px rgba(175, 175, 175, 0.7)"
    //       //     : "0px 0px 3px rgba(175, 175, 175, 0.7)",
    //       backdropFilter: "blur(200px)",
    //       duration: 0.6,
    //       ease: "power3.out",
    //     });
    // },
    // });
  });

  return (
    <div
      ref={navRef}
      style={{
        backgroundColor: "rgba(175, 175, 175, 0.10)",
        padding: "15px 25px",
        backdropFilter: "blur(200px)",
      }}
      className="w-[90%] mx-auto h-[4.1rem] rounded-lg flex items-center justify-between fixed top-[2.5rem] left-[50%] translate-x-[-50%] backdrop-saturate-200 backdrop-blur-3xl z-50"
    >
      <Logo />
      <div className="flex items-center gap-4">
        <span className="cursor-pointer text-[#54EECC] hover:text-[#54EECC] duration-300">
          EN
        </span>
        <span className="text-white cursor-pointer hover:text-[#54EECC] duration-300">
          AR
        </span>
        {/* <MenuIcon /> */}
      </div>
    </div>
  );
};

export default Navbar;
