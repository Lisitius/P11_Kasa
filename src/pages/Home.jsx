import Banner from "../layouts/banner/Banner";
import Cards from "../layouts/cards/cards";
import "./home.scss";

const Home = () => {
  return (
    <section className="home-container">
      <Banner />

      <div className="card-container">
        <Cards />
      </div>
    </section>
  );
};

export default Home;
