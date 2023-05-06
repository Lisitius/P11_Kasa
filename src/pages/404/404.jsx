import { Link } from "react-router-dom";
import "./_404.scss";

const Error404 = () => {
  return (
    <section className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </section>
  );
};

export default Error404;
