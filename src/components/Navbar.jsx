import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar_link" to="/">
        Home
      </Link>
      <Link className="navbar_link" to="/articles">
        Articles
      </Link>
     
    </nav>
  );
}

