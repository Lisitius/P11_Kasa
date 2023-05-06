import logofooter from "../../assets/logofooter.png";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={logofooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
