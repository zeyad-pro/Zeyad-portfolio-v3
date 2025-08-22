"use client";
import { Repeat } from "lucide-react";
import CopyEmailButton from "./components/copy";
import { motion } from "framer-motion";

export default function Home() {
  const herotitle = "I'm Zeyad Maher";
  const herodes = "I make front-end web with great experience.";
  const spanvr = {
    hidden: {
      opacity: 0,
    },
    visible: {
      // تم تصحيح الإملاء من "visable" إلى "visible"
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: 0.3, // تم تقليل القيمة لجعل الانيميشن أسرع
      },
    },
  };

  return (
    <div className="flex flex-col p-4 md:p-5 gap-4 md:gap-5">
      {/* Hero Section */}
      <div className="w-full bg-[#212121] border-2 border-[#262626] py-8 md:py-15 px-5 md:px-7 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-8 md:mb-13 gap-4">
          <h1 className="text-[#C0C0C0] text-sm md:text-base">
            Front-end web developer
          </h1>
          <div className="flex gap-2 bg-[#161616] px-2 py-1 rounded-full w-fit items-center text-xs md:text-sm">
            <motion.img
              src="/red circle.png"
              alt="red circle"
              className="w-3 md:w-4 object-cover"
            />{" "}
            AVAILABLE FOR JOB
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <motion.div
              variants={spanvr}
              initial="hidden"
              whileInView="visible"
              className="text-2xl md:text-4xl pb-2"
            >
              {herotitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={spanvr}
              initial="hidden"
              whileInView="visible"
              className="text-[#C0C0C0] md:w-50 pb-6 md:pb-10"
            >
              {herodes.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <CopyEmailButton />
          </div>
          <div className="bg-[#2C2C2C] rounded-full p-1 md:p-2 md:-translate-x-20 self-center">
            <motion.img
              animate={{
                // scale: [1, 1.2, 1],
                opacity: [0.5, 1 , 0.5] // تكبر وترجع
                // rotate: [0, 355], // تلف 20 درجة وترجع
              }}
              transition={{
                duration: 6,
                repeat: Infinity, // يكرر الحركة للأبد
                repeatType: "loop",
                ease: "easeOut",
              }}
              src="/unnamed.jpg"
              alt="profile"
              className="w-24 md:w-40 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Skills and Recent Work Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent works */}
        <div className="w-full">
          <div className="w-full flex justify-center items-center rounded-xl p-[1px] md:p-[0.2%] bg-gradient-to-tr from-red-500 from-20% to-gray-500/50 to-40% mb-4 md:mb-5">
            <div className="w-full h-full flex bg-gradient-to-tr from-red-500/30 from-20% to-40% bg-[#212121] rounded-xl p-3 flex-col">
              <p className="text-gray-200 m-2 md:m-4 md:ml-2">Recent Work :</p>

              {[
                {
                  name: "This Portfolio",
                  year: "2025 - Present",
                  tech: "Next js",
                },
                { name: "nexcent", year: "2025 - Present", tech: "Next js" },
                { name: "koursely", year: "2025 - Present", tech: "Next js" },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between px-4 md:px-8 p-2 items-center"
                >
                  <div>
                    <h1 className="text-lg md:text-xl text-red-600">
                      {project.name}
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base">
                      {project.year}
                    </p>
                  </div>
                  <h1 className="text-sm md:text-base">{project.tech}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}

        <div className="flex flex-col gap-4">
          {/*  */}
          <div className="w-full flex justify-center items-center rounded-xl p-[1px] md:p-[0.3%] bg-gradient-to-tl from-red-500 from-20% to-gray-500/50 to-40% mb-4 md:mb-5">
            <div className="w-full h-full flex bg-gradient-to-tl from-red-500/30 from-20% to-40% bg-[#212121] rounded-xl p-6 flex-col justify-center items-center min-h-[120px] md:min-h-[120px]">
              <h2 className="text-lg md:text-xl">Front-end Developer</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            {/*  */}
            <div className="w-full flex justify-center items-center rounded-xl p-[1px] md:p-[0.4%] bg-gradient-to-br from-red-500 from-20% to-gray-500/50 to-40% mb-4 md:mb-5">
              <div className="w-full h-full flex bg-gradient-to-br from-red-500/30 from-20% to-40% bg-[#212121] rounded-xl p-6 flex-col justify-center items-center min-h-[120px] md:min-h-[120px]">
                <h2 className="text-lg md:text-xl">Mobile Apps</h2>
              </div>
            </div>

            <div className="w-full flex justify-center items-center rounded-xl p-[1px] md:p-[0.4%] bg-gradient-to-bl from-red-500 from-20% to-gray-500/50 to-40% mb-4 md:mb-5">
              <div className="w-full h-full flex bg-gradient-to-bl from-red-500/30 from-20% to-40% bg-[#212121] rounded-xl p-6 flex-col justify-center items-center min-h-[120px] md:min-h-[120px]">
                <h2 className="text-lg md:text-xl">Simple Designs</h2>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-3">
        {[
          {
            title: "Nexcent",
            description: "web development",
            url: "https://nexcent-steel.vercel.app/",
            image: "/one.png",
            gradient: "bg-gradient-to-tr",
            time: 0.9,
          },
          {
            title: "koursely",
            description: "web develop",
            url: "https://koursely-six.vercel.app/",
            image: "/one x (3).png",
            gradient: "bg-gradient-to-bl",
            time: 0.8,
          },
          {
            title: "this portfolio",
            description: "web development",
            image: "/Screenshot (3).png",
            // fullWidth: true,
            gradient: "bg-gradient-to-bl",
            time: 0.7,
          },
        ].map((project, index) => (
          <div
            key={index}
            className={`flex gap-3 w-full ${
              project.fullWidth ? "md:w-full" : "md:w-[49.5%]"
            }`}
          >
            <div
              className={`w-full flex justify-center items-center rounded-xl p-[1px] md:p-[0.4%] ${project.gradient} from-red-500 from-20% to-gray-500/50 to-40% mb-4 md:mb-5`}
            >
              <div
                className={`w-full h-full flex ${project.gradient} from-red-500/30 from-20% to-40% bg-[#212121] rounded-xl p-3 flex-col`}
              >
                <div
                  className={`flex ${
                    project.fullWidth
                      ? "flex-col items-center justify-center"
                      : "justify-between"
                  } mb-6 md:mb-9 px-3`}
                >
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h1>
                    <p className="text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                  {!project.fullWidth && project.url && (
                    <a href={project.url}>
                      <div className="bg-red-500 rounded-full w-8 h-8 translate-y-4 p-1 flex item-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={`project ${index + 1}`}
                  className="w-full rounded-xl border border-red-500/50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
