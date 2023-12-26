import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/info">info</Link>
        </li>
        <li>
          <Link to="/address">address</Link>
        </li>
      </ul>
    </nav>
  );
}
