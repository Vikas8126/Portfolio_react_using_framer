import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const About = () => {
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

  return (
    <div
      className="about"
      ref={ref}
      style={{
        // background: "rgb(230, 230, 230)",
        // "linear-gradient(180deg, black, white)",
        background: "white",
      }}
    >
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="body">
        <Grid container spacing={2}>
          <Grid className="leftGrid" spacing={2} item md={7}>
            <h1>Personal Information</h1>
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item md={6}>
                <h2>Name : Vikas Yadav</h2>
                <h2>Phone : +1 647-219-3023</h2>
                <h2>Language : English, Hindi</h2>
                <h2>Email : vikasyadhuvanshi@gmail.com</h2>
              </Grid>
              <Grid item md={6}>
                <h2>Age : 28 Years</h2>
                <h2>Nationality : Indian</h2>
                <h2>
                  Address : Clydesdale Drive, North York, Ontario , Canada,
                  M2J3N2
                </h2>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="rightGrid" item md={5}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <div className="experience">
                  <h1>4+</h1>
                  <h2>Years of Experience</h2>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className="experience">
                  <h1>21+</h1>
                  <h2>Completed Projects</h2>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
