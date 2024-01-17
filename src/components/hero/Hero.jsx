import "./hero.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderTextVarinats = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  const skills = [
    {
      id: 1,
      title: "Angular",
      icon: "/angular.png",
      percentage: "85",
      experience: "3+ years",
      description:
        "Angular is a powerful front-end framework developed by Google. With over three years of experience, I've crafted dynamic and scalable web applications using Angular, harnessing its powerful features like two-way data binding and dependency injection to deliver seamless user experiences.",
    },
    {
      id: 2,
      title: "React",
      icon: "react.png",
      percentage: "85",
      experience: "4+ years",
      description:
        "React is a popular JavaScript library that I've extensively used for over four years to build efficient and interactive user interfaces. Leveraging its component-based architecture and virtual DOM, I've developed high-performing applications, ensuring reusability and maintainability across various projects.",
    },
    {
      id: 3,
      title: "HTML",
      icon: "html.png",
      percentage: "90",
      experience: "4+ years",
      description:
        "As a React Native developer for over two years, I've specialized in creating cross-platform mobile applications. Using React Native's single codebase, I've developed intuitive and responsive mobile apps with native-like performance, catering to diverse user needs and requirements.",
    },
    {
      id: 4,
      title: "CSS",
      icon: "css.png",
      percentage: "90",
      experience: "4+ years",
      description:
        "Python has been my go-to language for over three years. I've utilized its simplicity and readability to develop diverse applications, from web development to data analysis and machine learning, achieving efficient and scalable solutions.",
    },
    {
      id: 5,
      title: "Node.js",
      icon: "node.png",
      percentage: "80",
      experience: "4+ years",
      description:
        "With more than three years of experience in Node.js, I've built scalable and efficient server-side applications. Leveraging its event-driven, non-blocking I/O model, I've developed robust backend solutions, ensuring real-time data exchange and high-performance handling.",
    },
    {
      id: 6,
      title: "Type Script",
      icon: "typescript.png",
      percentage: "80",
      experience: "3+ years",
      description:
        "My experience with RESTful APIs spans over three years. I've designed and implemented RESTful architectures, ensuring interoperability between various systems. Leveraging REST principles, I've facilitated communication between client and server, delivering scalable and reliable web services.",
    },
    {
      id: 7,
      title: "GraphQL",
      icon: "graphql.png",
      percentage: "80",
      experience: "1+ years",
      description:
        "GraphQL has been a pivotal technology in my projects for over two years. With its flexible querying and strong type system, I've optimized data fetching, enabling efficient communication between frontend and backend systems, resulting in streamlined APIs and enhanced application performance.",
    },

    {
      id: 8,
      title: "Postgre SQL",
      icon: "postgresql.png",
      percentage: "80",
      experience: "1+ years",
      description:
        "C# has been a fundamental part of my development journey for over two years. With its versatility and robustness, I've built desktop, web, and gaming applications, ensuring high performance and code reliability.",
    },
    {
      id: 9,
      title: "Mongo DB",
      icon: "mongodb.png",
      percentage: "80",
      experience: "2+ years",
      description:
        "My experience with MongoDB spans over two years. Leveraging its flexible document-based structure, I've designed and implemented scalable databases, ensuring efficient data management and retrieval for various applications.",
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState(null);
  const handleSkillHover = (skill) => {
    setSelectedSkill(skill);
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Vikas Yadav</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>

          <motion.div
            className="skillsContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  onHoverStart={() => handleSkillHover(skill?.title)}
                  onHoverEnd={() => setSelectedSkill(null)}
                >
                  <img
                    style={{ width: 40 }}
                    src={skill?.icon}
                    alt={`Skill Icon`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={skill?.title}
                    data-tooltip-place="top"
                  />
                  <Tooltip id="my-tooltip" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={sliderTextVarinats}
        initial="initial"
        animate="animate"
      >
        Full Stack Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/profile.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
