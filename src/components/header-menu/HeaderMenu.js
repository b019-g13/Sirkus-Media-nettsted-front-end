import React from "react";
import "./header-menu.scss";
import Axios from "axios";

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
      <nav className="navTop">
        {menuLinks.map(function(links, i) {
          return (
            <a href={links.page_id} key={i}>
              {links.name}
            </a>
          );
        })}
      </nav>
    );
  }
}

export default HeaderMenu;
