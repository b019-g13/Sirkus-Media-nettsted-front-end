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
    console.log("hei");
    Axios.get("http://localhost:8000/api/v1/menus/" + this.props.menu.id)
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
