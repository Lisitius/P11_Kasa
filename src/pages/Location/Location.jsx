import React from "react";
import logement from "../../data/housing.json";
import Carousel from "../../components/carousel/Carousel";
import Dropdown from "../../components/dropdown/Dropdown";
import { useParams } from "react-router-dom";
import "./location.scss";

const Location = () => {
  const { id } = useParams();
  const location = logement.find((location) => location.id === id);

  if (!location) {
    return <div>Error 404</div>;
  }

  const maxRate = 5;
  const rate = location.rating;
  const stars = Math.round(rate);

  const renderStars = () => {
    const starElements = [];
    for (let i = 0; i < maxRate; i++) {
      if (i < stars) {
        starElements.push(
          <i
            key={i}
            className="fas fa-star"
            style={{ color: "$primary-color" }}
          ></i>
        );
      } else {
        starElements.push(
          <i key={i} className="fas fa-star" style={{ color: "#E3E3E3" }}></i>
        );
      }
    }
    return starElements;
  };

  return (
    <div className="location-container">
      <Carousel pictures={location.pictures} />
      <div className="content">
        <div className="content__left">
          <div>
            <h2 className="content__left-title">{location.title}</h2>
            <h2 className="content__left-loc">{location.location}</h2>
          </div>
          <div className="content__left-tags">
            <div className="content__left-tags-tag">
              {location.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="content__right">
          <div>
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className="content__right-rate">{renderStars()}</div>
        </div>
      </div>

      <div className="dropdown-location">
        <Dropdown title="Description" text={location.description} />
        <Dropdown
          title="Équipements"
          text={location.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
};

export default Location;
