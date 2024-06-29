import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn , textVariant } from '../utils/motion'
import  { Sectionwrapper }  from '../hoc';

const Servicecard = ({ title , index , icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
     variants={fadeIn("right" , "spring" , 0.5 * index , 0.75)}
     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-10'
    >
      <div
       options = {{
        max : 45,
        speed : 450,
        scale : 1
       }}
       className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}
        className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>
        Introduction
      </p>
      <h2 className={` ${styles.sectionHeadText}`}>
        Overview
      </h2>
     </motion.div>

     <motion.p
      variants={fadeIn("" , "" , 0.1, 1)}
      className='mt-4 text-[17px] max-w-3xl text-secondary leading-[30px]'
     >
      I am a Creative and skilled Front-End Developer with extensive experience in building dynamic and responsive portfolio websites. Proficient in JavaScript, React, and React Three Fiber, leveraging these technologies to create interactive and visually appealing user interfaces.
     </motion.p>

     <div className='mt-4 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <Servicecard key={service.title} index={index} {...service}/>
      ))}
     </div>
    </>
  )
}

export default Sectionwrapper(About , "about") 