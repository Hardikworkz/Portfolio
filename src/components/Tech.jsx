import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { motion } from "framer-motion";

const iconVariants =(duration)=>({
       initial:{y:-10},
       animate:{
              y:[10,-10],
              transition:{
                     duration: duration,
                     ease:"linear",
                     repeat: Infinity,
                     repeatType: "reverse",
              }
       },
});
const Tech = () => {
  return (
    <div>
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies.</motion.h1>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-900 p-4">
                     <RiReactjsFill className="text-5xl text-pink-300 "/>
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-900 p-4">
                     <SiTailwindcss className="text-5xl text-cyan-400"/>
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-900 p-4">
                     <IoLogoJavascript className="text-5xl text-yellow-400 "/>
              </motion.div><motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-900 p-4">
                     <IoLogoHtml5 className="text-5xl text-blue-500"/>
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-900 p-4">
                     <IoLogoCss3 className="text-5xl text-green-700 "/>
              </motion.div>
            </motion.div>
        
        </div>
    </div>
  )
}

export default Tech
                    
                    
                    