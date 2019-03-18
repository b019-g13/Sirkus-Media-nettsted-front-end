import React from "react";
import Axios from "axios";
import HeaderComponent from "./Header";

class Page extends React.Component {
  comps = [];

  componentWillMount() {
    this.setState({ pageComponents: [] });
    this.getPageComponents();
  }

  getPageComponents() {
    Axios.get("http://localhost:8000/api/v1/pages/" + this.props.page.id)
      .then(response => {
        this.setState({ pageComponents: response.data.components });
        console.log(response.data.components);

        this.state.pageComponents.forEach(pageComponent => {
          this.comps.push(pageComponent.name);
        });

        console.log("hey", this.comps);
      })
      .catch(error => {
        console.error("handle error", error);
      })
      .then(() => {
        console.log("always executed", this.state);
      });
  }

  render() {
    // Definerer alle komponenter
    const AllComponents = {
      headercomponent: HeaderComponent,
      actionbox: HeaderComponent,
      gridonethird: HeaderComponent,
      app: App
    };

    return this.state.pageComponents.map(function(pageComponent, i) {
      const names = { name: pageComponent.name };
    });
  }
}

export default Page;
