import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm an aspiring **Data Analyst and SAP ABAP Developer** currently pursuing my **B.Tech in Artificial Intelligence and Data Science** at Karpagam College of Engineering, Coimbatore (2023 - 2027).
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have a strong foundation in **SQL, Python, SAP ABAP, Data Structures, and Machine Learning**. I enjoy developing data-driven applications, image processing solutions, and backend business process automation.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Passionate about leveraging data analytics and SAP ERP systems to optimize business operations, I continuously work on enhancing my analytical and problem-solving skills. Feel free to check out my projects on **GitHub** or connect on **LinkedIn**.
        </p>
      </motion.div>
    </div>
  );
}
