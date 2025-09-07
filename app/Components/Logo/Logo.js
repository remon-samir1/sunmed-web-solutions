import Link from "next/link";
import React from "react";
const Logo = () => {
  return <Link href='/' className="w-[9rem] h-[2.7rem]"> <img src="/web.svg" alt="Sunmed" className="w-full h-full object-contain" /> </Link>;
};

export default Logo;
