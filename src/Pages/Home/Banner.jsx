import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/img/team1 (1).jpg'
import team2 from '../../assets/img/team2 (1).jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-8 min-h-96">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className='flex-1'>
          <motion.img
              animate={{y:[100,150,100]}}
              transition={{duration:5,repeat:Infinity}}
            src={team1}
            className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
              animate={{x:[100,150,100]}}
              transition={{duration:10,repeat:Infinity, delay:2}}
            src={team2}
            className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>
        <div className='flex-1'>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0, opacity: 1
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold">The
            <motion.span
              animate={{
                // আপনার কালার অ্যারে ঠিক আছে
                color: ["#333333", "#FF5733", "#33FF57", "#3357FF"]
              }}
              transition={{
                // সাধারণ সেটিংসগুলো বাইরেই থাকবে
                repeat: Infinity,
                repeatType: "reverse",

                // ✅ সমাধান: 'color' এর জন্য নির্দিষ্ট করে ডিউরেশন বলে দিন
                color: {
                  duration: 5,          // ৫ সেকেন্ড ধরে পুরো সাইকেল চলবে
                  ease: "linear",       // কালার পরিবর্তন স্মুথ হবে
                  repeat: Infinity,     // ✅ অনন্তকাল ধরে লুপ হবে
                  repeatType: "reverse" // ✅ শেষ থেকে আবার শুরুতে ফিরে আসবে
                }
              }}

            >Easiest Way</motion.span> to Get Your New Job</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;