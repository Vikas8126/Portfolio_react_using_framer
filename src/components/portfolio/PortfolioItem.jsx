import React, { useState, useEffect, useRef } from "react";
import Close from "../../../public/close.svg";
import { render } from "react-dom";

const PortfolioItem = ({ img, title, type, details }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const renderMedia = () => {
    if (type === "img") {
      return <img src={img} alt="" className="portfolio__img" />;
    } else if (type === "video") {
      return (
        <video controls autoplay="true" className="portfolio__img">
          <source src={img} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null; // Handle other types or no type specified
  };

  useEffect(() => {
    console.log(details, "details");
  }, []);

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);
  return (
    <div className="portfolio__item">
      {renderMedia()}
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
        <h6 className="portfolio__title1">Click to see more details!</h6>
      </div>
      {showModal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content" ref={modalRef}>
            <img
              src={Close}
              alt=""
              objectFit="cover"
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              <li className="modal__item">
                <div>
                  <span className="item__details">Title : </span>
                  <span className="item__title">{details?.title}</span>
                </div>
              </li>
            </ul>
            <ul className="modal__list grid">
              <li className="modal__item">
                <div>
                  <span className="item__details">Languages : </span>
                  <span className="item__title">{details?.languages}</span>
                </div>
              </li>
            </ul>
            <ul className="modal__list grid">
              <li className="modal__item">
                <div>
                  <span className="item__details">Preview : </span>
                  <a
                    href={details?.desc}
                    className="item__title"
                    target="_blank"
                  >
                    {details?.desc}
                  </a>
                </div>
              </li>
            </ul>

            {renderMedia()}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
