import React from "react";

const Contact = () => {
  return (
    <div className="contact mt-28">
      <h3 className="text-white text-7xl mt-7 text-center ">
        Do You Have Any
        <br />
        <span className="text-main">Project?</span>
      </h3>
      <form className="mt-10">
        <div className="flex items-center gap-5">
          <input style={{background:"rgba(175, 175, 175, 0.30)"}} type="text" className="md:w-72 text-[#fff] outline-none border-none p-3 " placeholder="Name" />
          <input style={{background:"rgba(175, 175, 175, 0.30)"}} type="email" className="md:w-72 text-[#fff] outline-none border-none p-3 bg-" placeholder="Email" />
          <input style={{background:"rgba(175, 175, 175, 0.30)"}} type="text" className="md:w-72 text-[#fff] outline-none border-none p-3 bg-" placeholder="Message" />
        </div>
        <div className="text-center mt-12">

        <button type="submit" className="bg-main font-medium text-[1.1rem] hover-main duration-300 rounded-md px-12 py-[10px] text-[#141414]">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
