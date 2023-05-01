import "./cards.scss";
import logement from "../../data/housing.json";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="cards">
      {logement.map((location) => (
        <Link to={`/location/${location.id}`} key={location.id}>
          <div
            className="cards__card"
            style={{ backgroundImage: `url(${location.cover})` }}
          >
            <h2>{location.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
