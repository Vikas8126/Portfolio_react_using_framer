import React, { useState } from "react";
import portfolioData from "../../PortfolioData";
import PortfolioItem from "./PortfolioItem";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio-section" className="portfolio section">
      <h1 className="section__title">My Projects</h1>
      <div className="portfolio__container grid">
        {portfolioData.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
