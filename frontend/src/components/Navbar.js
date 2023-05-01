import { Component } from "react";
import "./Navbarstyles.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">SHIKSHA</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          {/* <i className='fas fa-times'></i> */}
        </div>

        <ul className={this.state.clicked ? "nav-menu.active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/login">
              <button className="nav-btn">Sign-in</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
