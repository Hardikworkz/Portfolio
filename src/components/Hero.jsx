import { motion } from "framer-motion";
const container = (delay)=>({
  hidden: { x: -100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay },
  },
});
 
const Hero = () => {
  return (
    <div id="hero" className=" border-b-2 border-neutral-900 pb-4 lg:mb-35 ">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className=" pl-14 flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className=" pb-20 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl ">Hardik Lalwani</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"className="bg-gradient-to-r from-lime-500 to-blue-600 text-4xl tracking-tight text-transparent bg-clip-text ">Front End Developer</motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter ">

                I am a passionate Front End Developer with a natural ability to design Scalable user-friendly interfaces. With 8 months of hands-on experince , I have honed my skills in ReactJs, Tailwind Css, JavaScript, HTML, and CSS. My goal is to create innovative and user-friendly interfaces that drive business growth and exceptional user experience.   
            </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex justify-center">
               <motion.img
               initial={{x:100,opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{duration:1,delay:1.2}}
               src="https://images.pexels.com/photos/8068011/pexels-photo-8068011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-96" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Hero