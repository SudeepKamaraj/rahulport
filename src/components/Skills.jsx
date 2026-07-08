import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGithub, FaBriefcase, FaGraduationCap, FaCertificate, FaChartBar
} from "react-icons/fa";
import { 
  SiSap, SiTableau, SiPandas, SiNumpy, SiScikitlearn, SiJenkins
} from "react-icons/si";

export default function Skills() {
  const [skillCategories] = useState([
    {
      title: "Technical Skills",
      skills: [
        { name: "Python", icon: <FaPython size={40} /> },
        { name: "Java", icon: <FaJava size={40} /> },
        { name: "SQL", icon: <FaDatabase size={40} /> },
        { name: "Git", icon: <FaGitAlt size={40} /> },
        { name: "HTML/CSS", icon: <FaHtml5 size={40} /> },
        { name: "JavaScript", icon: <FaJs size={40} /> },
        { name: "Docker", icon: <FaDocker size={40} /> },
        { name: "Jenkins", icon: <SiJenkins size={40} /> },
        { name: "GitHub", icon: <FaGithub size={40} /> },
      ]
    },
    {
      title: "SAP & ERP Systems",
      skills: [
        { name: "SAP ABAP", icon: <SiSap size={40} /> },
        { name: "Open SQL", icon: <FaDatabase size={40} /> },
        { name: "Data Dictionary", icon: <FaDatabase size={40} /> },
        { name: "ALV Reports", icon: <SiSap size={40} /> },
      ]
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Power BI", icon: <FaChartBar size={40} /> },
        { name: "Tableau", icon: <SiTableau size={40} /> },
        { name: "Pandas", icon: <SiPandas size={40} /> },
        { name: "NumPy", icon: <SiNumpy size={40} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={40} /> },
      ]
    }
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "LearnLogicify Technologies",
      role: "Artificial Intelligence Intern",
      period: "Internship Period",
      description:
        "Successfully completed an Artificial Intelligence internship focused on fundamental AI concepts and practical applications. Strengthened analytical and problem-solving skills through practical assignments and industry-oriented learning. Developed an understanding of AI methodologies and emerging technologies in the field of Artificial Intelligence.",
      logo: null,
    },
  ]);

  const [education] = useState([
    {
      id: 1,
      institution: "Karpagam College of Engineering, Coimbatore",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      period: "09/2023 - 09/2027",
      description: "Pursuing bachelor's degree with a focus on core artificial intelligence concepts, machine learning, data structures, and advanced data analytics.",
    }
  ]);

  const [certifications] = useState([
    {
      id: 1,
      title: "SAP ABAP Development Certification",
      provider: "Professional Certification",
      description: "Completed SAP ABAP certification with hands-on knowledge in report programming, data dictionary, smart forms, and ERP application development.",
    },
    {
      id: 2,
      title: "Machine Learning with Python",
      provider: "Professional Course",
      description: "Acquired knowledge of machine learning fundamentals, data preprocessing, model development, and predictive analytics using Python and Scikit-learn.",
    }
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="mt-10">
            <h3 className="text-xl font-extrabold text-black border-b-2 border-black pb-2 mb-6 w-fit">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-base font-bold w-full place-items-center">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-32 w-32 lg:h-36 lg:w-36 flex flex-col items-center justify-center gap-3 text-center"
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: skillIdx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill.icon}
                  <p className="text-xs lg:text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience, Education & Certifications Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <div className="px-5 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Experience & Education Column */}
            <div className="space-y-10">
              <div>
                <motion.h2
                  className="text-2xl lg:text-3xl text-white font-normal mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Work <span className="font-extrabold">Experience</span>
                </motion.h2>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                            <FaBriefcase size={16} />
                          </div>
                          <h3 className="font-semibold text-white text-lg">
                            {exp.role} at {exp.company}
                          </h3>
                        </div>
                        <span className="text-[#D4D4D8] font-semibold text-xs mt-2 lg:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#D4D4D8] mt-4 text-sm font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h2
                  className="text-2xl lg:text-3xl text-white font-normal mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Education
                </motion.h2>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                            <FaGraduationCap size={16} />
                          </div>
                          <h3 className="font-semibold text-white text-lg">
                            {edu.degree}
                          </h3>
                        </div>
                        <span className="text-[#D4D4D8] font-semibold text-xs mt-2 lg:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-sm text-[#A1A1AA] mt-2 ml-12">{edu.institution}</h4>
                      <p className="text-[#D4D4D8] mt-3 ml-12 text-sm font-light leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <motion.h2
                className="text-2xl lg:text-3xl text-white font-normal mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Training & <span className="font-extrabold">Certifications</span>
              </motion.h2>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                        <FaCertificate size={16} />
                      </div>
                      <h3 className="font-semibold text-white text-lg">
                        {cert.title}
                      </h3>
                    </div>
                    <h4 className="text-sm text-[#A1A1AA] mt-2 ml-12">{cert.provider}</h4>
                    <p className="text-[#D4D4D8] mt-3 ml-12 text-sm font-light leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
