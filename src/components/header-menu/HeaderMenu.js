import React from "react";
import "./header-menu.scss";
import Axios from "axios";
import logo from "../../logo-white.svg";
import menuIcon from "../../menu.svg";

class HeaderMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      navOpen: false
    };

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  componentWillMount() {
    this.getPageMenus();
    this.setState({
      pageMenusLinks: []
    });
  }

  getPageMenus() {
    Axios.get("https://api.b019-g13.group/api/v1/menus/" + this.props.menu.id)
      .then(response => {
        this.setState({ pageMenusLinks: response.data.links });
      })
      .catch(error => {
        console.error("Menu handle error", error);
      })
      .then(() => {
        console.log("Menu always executed", this.state);
      });
  }

  render() {
    const menuLinks = this.state.pageMenusLinks;

    const iconOpen = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon open"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    );

    const iconClose = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon close"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );

    return (
      <nav className={"nav-top" + (this.state.navOpen ? " nav-open" : "")}>
        <section className="nav-top-left">
          <a href="/">
            <img src={logo} alt="Logo: Sirkus Media" />
          </a>
        </section>
        <section className="nav-top-right">
          <button id="nav-top-right-btn" onClick={this.navToggle}>
            {iconOpen}
            {iconClose}
          </button>
          <div className="links">
            {menuLinks.map(function(links, i) {
              return (
                <a href={links.page_id} key={i}>
                  {links.name}
                </a>
              );
            })}
          </div>
        </section>
      </nav>
    );
  }
}

export default HeaderMenu;
