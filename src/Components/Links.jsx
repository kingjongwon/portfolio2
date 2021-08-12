import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(44, 59, 145)",
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
            <NavLink to="favorite" activeStyle={activeStyle}>
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
