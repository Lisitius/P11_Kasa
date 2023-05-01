import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/cards";
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
