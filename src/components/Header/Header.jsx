import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/logement">Logement</Link>
      <Link to="/a-propos">A propos</Link>
      <Link to="/aleatoire">aleatoire</Link>
    </nav>
  );
}

export default Header;
