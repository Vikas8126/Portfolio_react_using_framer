// import React, { useState } from "react";
// import "./portfolio.scss";
// import Close from "../../../public/close.svg";
// import Grid from "@mui/material/Grid";

//   const portfolioData = [
//     {
//       id: 1,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     {
//       id: 2,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     {
//       id: 3,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     {
//       id: 4,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     {
//       id: 5,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     {
//       id: 6,
//       img: "/people.webp",
//       title: "Photo Editing",
//       details: [
//         { icon: "📄", title: "Project:", desc: "Photo" },
//         { icon: "👤", title: "Client:", desc: "Dribble" },
//         { icon: "💻", title: "Language:", desc: "Adobe Photoshop" },
//         { icon: "🔗", title: "Preview:", desc: "www.dribble.com" },
//       ],
//     },
//     // Add more projects as needed
//   ];

//   const [showModal, setShowModal] = useState(false);
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };
//   return (
//     // <div
//     //   className="portfolio"
//     //   style={{
//     //     // background: "rgb(230, 230, 230)",
//     //     // "linear-gradient(180deg, black, white)",
//     //     background: "white",
//     //   }}
//     // >
//     //   <Grid container>
//     //     <Grid item md={12} className="header">
//     //       <h1>Projects that i worked on</h1>
//     //     </Grid>
//     //     <Grid container>
//     //       <Grid item md={4} className="projects">
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //       <Grid item md={4} className="projects">
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //       <Grid item md={4} className="projects">
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //     </Grid>
//     //     <Grid container>
//     //       <Grid item md={4} className="projects">
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //       <Grid item md={4} className="projects">
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //       <Grid item md={4}>
//     //         <h1>Projects that i worked on</h1>
//     //       </Grid>
//     //     </Grid>
//     //   </Grid>
//     // </div>
//     <div
//       className="portfolio"
//       style={{
//         background: "white",
//       }}
//     >
//       <h1>Projects that I worked on:</h1>
//       <Grid container style={{ margin: 0, padding: 0 }}>
//         {portfolioData.map((project) => (
//           <Grid item md={4} key={project.id} className="projects">
//             <img src={project.img} alt={project.title} onClick={toggleModal} />
//             <h2 className="overlay">{project.title}</h2>
//             <ul className="overlay">
//               {project.details.map((detail, index) => (
//                 <li className="overlay" key={index}>
//                   {detail.icon} {detail.title} {detail.desc}
//                 </li>
//               ))}
//             </ul>
//             <div className="buttons">
//               <img
//                 style={{ width: 40, marginTop: -5, cursor: "pointer" }}
//                 src="linkedin.png"
//                 alt={`linkedin`}
//                 onClick={() => handleClick("linkedin")}
//               />
//               <img
//                 style={{ width: 40, marginTop: -5, cursor: "pointer" }}
//                 src="github.png"
//                 alt={`github`}
//                 onClick={() => handleClick("github")}
//               />
//             </div>
//             <div className="portfolio__item">
//               {showModal && (
//                 <div className="portfolio__modal">
//                   <div className="portfolio__modal-content">
//                     <img
//                       src={Close}
//                       alt=""
//                       className="modal__close"
//                       onClick={toggleModal}
//                     />
//                     <h3 className="modal__title">abc</h3>
//                     <ul className="modal__list grid">
//                       {portfolioData?.map(({ icon, title, desc }, index) => {
//                         return (
//                           <li className="modal__item" key={index}>
//                             <span className="item__icon">{icon}</span>

//                             <div>
//                               <span className="item__title">{title}</span>
//                               <span className="item__details">{desc}</span>
//                             </div>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                     <img src={project.img} alt="" className="modal__img" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

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
