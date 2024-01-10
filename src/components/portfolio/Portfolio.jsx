import React from "react";
import "./portfolio.scss";
import Grid from "@mui/material/Grid";

const Portfolio = () => {
  return (
    <div
      className="portfolio"
      style={{
        // background: "rgb(230, 230, 230)",
        // "linear-gradient(180deg, black, white)",
        background: "white",
      }}
    >
      <Grid container>
        <Grid item md={12} className="header">
          <h1>Projects that i worked on</h1>
        </Grid>
        <Grid container>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
          <Grid item md={4} className="projects">
            <h1>Projects that i worked on</h1>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
