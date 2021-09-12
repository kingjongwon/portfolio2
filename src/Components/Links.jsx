import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(80, 48, 6)",
  borderBottom: "2px solid rgb(80, 48, 6)",
};

export default function Links() {
  return (
    <div className="header">
      <div className="logo-box">
        <h1>
          <NavLink to="/" exact activeStyle={activeStyle} className="logo-txt">
            KIM JONG WON
          </NavLink>
        </h1>
      </div>
      <nav className="main-menu">
        <ul className="gnb">
          <li>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dev" activeStyle={activeStyle}>
              Dev
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" activeStyle={activeStyle}>
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
