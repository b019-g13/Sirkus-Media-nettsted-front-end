import React from "react";
import "./header-menu.scss";
import Axios from "axios";

class HeaderMenu extends React.Component {
  componentWillMount() {
    this.getPageMenus();
  }

  getPageMenus() {
    console.log("hei");
    Axios.get("http://localhost:8000/api/v1/menus/" + this.props.menu.id)
      .then(response => {
        // this.setState({ pageComponents: response.data.components });
        // this.setState({ readyComponents: this.pageSetup() });

        console.log("menu", response.data);
      })
      .catch(error => {
        console.error("Menu handle error", error);
      })
      .then(() => {
        console.log("Menu always executed", this.state);
      });
  }

  render() {
    return (
      <nav className="nav">
        <a href={this.props.a}>{console.log(this.props.a)}</a>
      </nav>
    );
  }
}

export default HeaderMenu;
