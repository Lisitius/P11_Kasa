import React from "react";
import logement from "../../data/housing.json";
import Carousel from "../../components/carousel/Carousel";
import { useParams } from "react-router-dom";

const Location = () => {
  const { id } = useParams();
  const location = logement.find((location) => location.id === id);

  if (!location) {
    return <div>Error 404</div>;
  }

  return (
    <div className="location">
      <Carousel pictures={location.pictures} />
    </div>
  );
};

export default Location;
