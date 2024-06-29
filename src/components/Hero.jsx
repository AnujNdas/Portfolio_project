import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import Computers from "./canvas/Computers";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText}
            text-white`}
          >
            {" "}
            Hii ! I m <span className="text-[#915eff]"> Anuj </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            {" "}
            I Develop 3D user Interfaces <br className="sm:block hidden"/> and E-commerce Websites
          </p>
        </div>
      </div>
      <ComputerCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl items-center justify-center border-4 border-secondary p-2">
    <motion.div
      animate={{
         y : [0 , 24 , 0]
        }}
        transition={{
          duration : 1.5,
          repeat : Infinity,
          repeatType : 'loop'
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
    />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
