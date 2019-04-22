import React from "react";
import "./header-menu.scss";
import Axios from "axios";
import logo from "../../logo.svg";
import menuIcon from "../../menu.svg";

class HeaderMenu extends React.Component {
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
    return (
      <nav className="nav-top">
        <section className="nav-top-left">
          <img src={logo} alt="Logo: Sirkus Media" />
        </section>
        <section className="nav-top-right">
          <button id="nav-top-right-btn">
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
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {menuLinks.map(function(links, i) {
            return (
              <a href={links.page_id} key={i}>
                {links.name}
              </a>
            );
          })}
        </section>
      </nav>
    );
  }
}

export default HeaderMenu;
