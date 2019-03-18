import React from "react";
import Axios from "axios";
import HeaderComponent from "./Header";
import App from "../App";

class Page extends React.Component {
  componentWillMount() {
    this.setState({ pageComponents: [] });
    this.getPageComponents();
  }

  getPageComponents() {
    Axios.get("http://localhost:8000/api/v1/pages/" + this.props.page.id)
      .then(response => {
        this.setState({ pageComponents: response.data.components });
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

    // Looper igjennom komponentene til siden
    return this.state.pageComponents.map(function(pageComponent, i) {
      const pageComponentsName = pageComponent.slug;

      // Looper igjennom alle de definerte komponentene
      return Object.keys(AllComponents).map(function(slug) {
        const AllComponentsName = slug;
        if (pageComponentsName === AllComponentsName) {
          const Comp = AllComponents[slug];
          let componentFields = {};

          // Looper gjennom alle fields/props til komponenten
          for (let field = 0; field < pageComponent.fields.length; field++) {
            const slug = pageComponent.fields[field].slug;
            const value = pageComponent.fields[field].value;

            componentFields[slug] = value;
          }

          // Gjør setter alle fields i komponenten som props
          return <Comp {...componentFields} key={i} />;
        }
      });
    });
  }
}

export default Page;
