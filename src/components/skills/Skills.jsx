import "./skills.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Skills = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const skills = [
    {
      id: 1,
      title: "Angular",
      icon: "/angular.png",
      percentage: "85",
      experience: "3+ years",
      description:
        "I have 3 years of experience in Angular. I have single-handedly worked on creating and managing Angular websites during my term in Infosys. I have worked on Angular 8 and above thereby successfully completing more than 10 projects on the framework.",
    },
    {
      id: 2,
      title: "React",
      icon: "react.png",
      percentage: "85",
      experience: "4+ years",
      description:
        "I've extensively React used for over four years to build efficient and interactive user interfaces. Leveraging its component-based architecture and virtual DOM, I've developed high-performing applications, ensuring reusability and maintainability across various projects.",
    },
    {
      id: 3,
      title: "HTML",
      icon: "html.png",
      percentage: "90",
      experience: "4+ years",
      description:
        "Having worked with HTML for several years, I've honed my skills in crafting the fundamental structure of web pages and applications. HTML is like the skeleton of all the websites and apps out there, and I've got a real knack for laying down this groundwork. By combining HTML with other technologies like CSS and JavaScript, I create not just functional but visually appealing and interactive web experiences. Whether it's building a simple static page or integrating complex elements into web applications, I ensure that the foundation is strong, accessible, and up to the latest web standards.",
    },
    {
      id: 4,
      title: "CSS",
      icon: "css.png",
      percentage: "90",
      experience: "4+ years",
      description:
        "As a CSS enthusiast and having more than 4 years of experience, I excel in transforming basic web layouts into stunning, responsive designs. My expertise lies in creating fluid layouts with Flexbox and Grid, crafting engaging animations, and ensuring cross-browser compatibility. I focus on clean, maintainable CSS to deliver visually appealing and user-friendly experiences.",
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
        "With a strong foundation in TypeScript and more than 4 years of experience, I enhance JavaScript codebases by bringing in robust typing and improved scalability. My experience with TypeScript involves creating more maintainable and error-free code, leveraging its powerful type system for better project structuring and developer productivity.",
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
        "Over my two years of working with PostgreSQL, I've honed my skills in managing and designing databases with efficiency and precision. My experience includes crafting optimized queries, designing relational schemas, and implementing robust data storage solutions. I value PostgreSQL for its reliability and advanced features, which have enabled me to handle complex data requirements effectively.",
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

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        // background: "rgb(230, 230, 230)",
        background: "white",
      }}
      //   style={{
      //     background: "linear-gradient(180deg, white, black)",
      //   }}
    >
      <motion.div className="skillCards" style={{ y: yBg }}>
        {skills.map(({ title, icon, percentage }, index) => {
          return (
            <motion.div
              key={index}
              className="skillCard"
              style={{ x: yBg, opacity: 1 }}
              onHoverStart={() => setHoveredSkill(title)} // Set hovered skill on hover start
              onHoverEnd={() => setHoveredSkill(null)} // Clear hovered skill on hover end
            >
              <div className="progessCircle">
                <CircularProgressbarWithChildren value={percentage}>
                  <img
                    style={{ width: 50, marginTop: -5 }}
                    className="skillImg"
                    src={icon}
                  />
                </CircularProgressbarWithChildren>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {hoveredSkill ? (
        <motion.div className="skillText">
          <motion.h1 style={{ y: yText }}>{hoveredSkill}</motion.h1>
          <motion.h2 style={{ y: yText }}>
            {skills.find((skill) => skill.title === hoveredSkill)?.description}
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div className="skillText">
          <motion.h1 style={{ y: yText }}>{"Skills I have: "}</motion.h1>
          <motion.h2 style={{ y: yText }}>
            "As a software developer and UI designer proficient in React and
            Angular, I create engaging and functional digital experiences. I
            specialize in translating designs into responsive applications,
            ensuring seamless functionality and captivating user interfaces.: "
          </motion.h2>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
