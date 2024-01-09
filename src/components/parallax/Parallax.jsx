import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Parallax = ({ type }) => {
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
      percentage: "70",
      experience: "3+ years",
      description:
        "Angular is a powerful front-end framework developed by Google. With over three years of experience, I've crafted dynamic and scalable web applications using Angular, harnessing its powerful features like two-way data binding and dependency injection to deliver seamless user experiences.",
    },
    {
      id: 2,
      title: "React",
      icon: "react.png",
      percentage: "70",
      experience: "4+ years",
      description:
        "React is a popular JavaScript library that I've extensively used for over four years to build efficient and interactive user interfaces. Leveraging its component-based architecture and virtual DOM, I've developed high-performing applications, ensuring reusability and maintainability across various projects.",
    },
    {
      id: 3,
      title: "React Native",
      icon: "", // Add the path to the React Native icon
      percentage: "70",
      experience: "2+ years",
      description:
        "As a React Native developer for over two years, I've specialized in creating cross-platform mobile applications. Using React Native's single codebase, I've developed intuitive and responsive mobile apps with native-like performance, catering to diverse user needs and requirements.",
    },
    {
      id: 4,
      title: "Node.js",
      icon: "node.png",
      percentage: "70",
      experience: "3+ years",
      description:
        "With more than three years of experience in Node.js, I've built scalable and efficient server-side applications. Leveraging its event-driven, non-blocking I/O model, I've developed robust backend solutions, ensuring real-time data exchange and high-performance handling.",
    },
    {
      id: 5,
      title: "GraphQL",
      icon: "graphql.png",
      percentage: "70",
      experience: "2+ years",
      description:
        "GraphQL has been a pivotal technology in my projects for over two years. With its flexible querying and strong type system, I've optimized data fetching, enabling efficient communication between frontend and backend systems, resulting in streamlined APIs and enhanced application performance.",
    },
    {
      id: 6,
      title: "REST",
      icon: "REST.png",
      percentage: "70",
      experience: "3+ years",
      description:
        "My experience with RESTful APIs spans over three years. I've designed and implemented RESTful architectures, ensuring interoperability between various systems. Leveraging REST principles, I've facilitated communication between client and server, delivering scalable and reliable web services.",
    },
    // Add descriptions for the remaining skills (7, 8, 9)
    {
      id: 7,
      title: "Python",
      icon: "python.png",
      percentage: "70",
      experience: "3+ years",
      description:
        "Python has been my go-to language for over three years. I've utilized its simplicity and readability to develop diverse applications, from web development to data analysis and machine learning, achieving efficient and scalable solutions.",
    },
    {
      id: 8,
      title: "C#",
      icon: "csharp.png",
      percentage: "70",
      experience: "2+ years",
      description:
        "C# has been a fundamental part of my development journey for over two years. With its versatility and robustness, I've built desktop, web, and gaming applications, ensuring high performance and code reliability.",
    },
    {
      id: 9,
      title: "MongoDB",
      icon: "mongodb.png",
      percentage: "70",
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
        background:
          type === "About"
            ? "rgb(230, 230, 230)"
            : "linear-gradient(180deg, black, white)",
      }}
      //   style={{
      //     background:
      //       type === "About"
      //         ? "linear-gradient(180deg, white, black)"
      //         : "linear-gradient(180deg, black, white)",
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
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <h4 style={{ marginTop: "140px" }}>
                      {title}, {percentage}%
                    </h4>
                  </div>
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
          <motion.h1 style={{ y: yText }}>
            {type === "About" ? "What I do: " : "What I did:"}
          </motion.h1>
          <motion.h2 style={{ y: yText }}>
            {type === "About"
              ? "As a software developer and UI designer proficient in React and Angular, I create engaging and functional digital experiences. I specialize in translating designs into responsive applications, ensuring seamless functionality and captivating user interfaces.: "
              : "What I did:"}
          </motion.h2>
        </motion.div>
      )}

      {/* <motion.div className="mountains"> </motion.div> */}
      {/* <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "About" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div> */}
      {/* <motion.div style={{ x: yBg }} className="stars"></motion.div> */}
    </div>
  );
};

export default Parallax;
