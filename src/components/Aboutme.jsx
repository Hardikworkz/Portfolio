import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About  
        <span className="text-neutral-700"> Me</span>
        </h1>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:.52}}
            src="https://images.pexels.com/photos/3890376/pexels-photo-3890376.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="abot" className="h-96 rounded-2xl " />
            </div>
            </div>
            <div className="w-full lg:w-1/2">
            <motion.div
            initial={{x:0,opacity:0}}
            animate={{x:100,opacity:1}}
            transition={{duration:1,delay:0.52}}
            className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-2xl p-6"> 
                  I am a dedicated Front End Developer with a passion for creating efficient and user-friendly interfaces. With 7 months of experience, I have worked with a variety of technologies including React, JavaScript, Tailwind Css, HTML, and CSS. My journey with Front End began with a deep curiosity for how things work on websites, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside tech, you will find me hitting the gym or learning  I am a dedicated Front End Developer with a passion for creating efficient and user-friendly interfaces. With 7 months of experience, I have worked with a variety of technologies including React, JavaScript, Tailwind Css, HTML, and CSS. My journey with Front End began with a deep curiosity for how things work on websites, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside tech, you will find me hitting the gym or learning new things to keep my mind and body active.  
                  </p>
            </motion.div>
            </div>
    </div>
    </div>
  )
}

export default Aboutme
