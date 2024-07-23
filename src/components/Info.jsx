import {CONTACT} from "../constants";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="border-b border-neutral-900 pb-2">
      <motion.h1
      whileInView={{y:0,opacity:1}}
    animate={{y:-100,opacity:0}}
    transition={{duration:1,delay:1}}
 className="my-10 text-center text-4xl">Get in Touch</motion.h1>
    <div className="text-center tracking-tighter ">
    <motion.p
    whileInView={{x:0,opacity:1}}
    animate={{x:-100,opacity:0}}
    transition={{duration:1,delay:1}}

    
    className="my-4 ">{CONTACT.address}</motion.p>
    <motion.p
    whileInView={{x:0,opacity:1}}
    animate={{x:100,opacity:0}}
    transition={{duration:1,delay:1}}

     className="my-4 ">{CONTACT.phoneNo}</motion.p>
    <p className="my-4 ">{CONTACT.email}</p>
    </div>
    </div>
  )
}

export default Info
