import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/logement">Logement</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default Header;
