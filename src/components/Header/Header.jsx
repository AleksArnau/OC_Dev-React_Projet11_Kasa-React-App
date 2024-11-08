import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/logement">Logement</Link>
      <Link to="/a-propos">A propos</Link>
      <Link to="/aleatoire">Aleatoire"404"</Link>
    </nav>
  );
}

export default Header;
