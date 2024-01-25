import "./about.scss";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const textVariants = {
  animate: {
    transition: {
      staggerChildren: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      type: "tween",
      delay: 2,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  const ref = useRef();
  const controls = useAnimation();
  const handleClick = (type) => {
    if (type === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/vikas-yadav-full-stack/",
        "_blank"
      );
    } else {
      window.open("https://github.com/Vikas8126", "_blank");
    }
  };

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
        <h1 className="section__title">About Me</h1>
      </div>
      <div className="body">
        <Grid container style={{ margin: 0 }} spacing={2}>
          <Grid className="leftGrid" spacing={2} item md={7}>
            <h1>Personal Information</h1>
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
            <Grid container className="wantText">
              <Grid item md={12} style={{ margin: 0 }}>
                <motion.h3
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    // fontSize: 22,
                    fontWeight: 600,
                    color: "grey",
                    marginBottom: 6,
                  }}
                >
                  Want to know more about me?
                </motion.h3>
              </Grid>
            </Grid>
            <Grid
              style={{ textAlign: "center" }}
              container
              className="buttons"
              spacing={2}
            >
              <Grid item md={6}>
                <button
                  className="centeredButton"
                  onClick={() => window.open("/VikasYadavResume.pdf", "_blank")}
                >
                  See Resume <img src="/share.png" width={25} alt="" />
                </button>
              </Grid>
              <Grid item md={6}>
                <button
                  className="centeredButton"
                  onClick={() =>
                    window.open("/VikasYadavResume.docx", "_blank")
                  }
                >
                  Download Resume <img src="/download.png" width={25} alt="" />
                </button>
              </Grid>
              <Grid item md={12} className="gitLinkedin" style={{}}>
                <img
                  style={{ width: 40, marginTop: -5, cursor: "pointer" }}
                  src="linkedin.png"
                  alt={`linkedin`}
                  onClick={() => handleClick("linkedin")}
                />
                <img
                  style={{ width: 40, marginTop: -5, cursor: "pointer" }}
                  src="github.png"
                  alt={`github`}
                  onClick={() => handleClick("github")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="rightGrid" item md={5}>
            <Grid container style={{ margin: 0 }} spacing={3}>
              <Grid item className="gridItem" md={6} sm={3}>
                <div className="experience">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1 style={{ marginRight: "5px" }}>4+</h1>
                    <img src="/breifcase.png" style={{ width: 50 }} alt="" />
                  </div>
                  <h2>Years of Industry Experience</h2>
                </div>
              </Grid>
              <Grid item className="gridItem" md={6} sm={3}>
                <div className="experience">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1>21+</h1>
                    <img src="/solution.png" style={{ width: 50 }} alt="" />
                  </div>
                  <h2>Completed Projects</h2>
                </div>
              </Grid>
              <Grid item className="gridItem" md={6} sm={3}>
                <div className="experience">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: "grey",
                        marginBottom: 6,
                      }}
                    >
                      Post Grad
                    </h1>
                    <img src="/graduation.png" style={{ width: 40 }} alt="" />
                  </div>
                  <h3
                    style={{
                      marginTop: 20,
                      fontSize: 18,
                      fontWeight: 400,
                      color: "black",
                    }}
                  >
                    Computer software and Database development from Lambton
                    College in Toronto
                  </h3>
                </div>
              </Grid>
              <Grid item className="gridItem" md={6} sm={3}>
                <div className="experience">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: "grey",
                        marginBottom: 6,
                      }}
                    >
                      B.Tech
                    </h1>
                    <img src="/graduation.png" style={{ width: 40 }} alt="" />
                  </div>
                  <h3
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: 400,
                      color: "black",
                    }}
                  >
                    M.J.P.R University, Bareilly India
                  </h3>
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
