import React from "react";
import Axios from "axios";
import HeaderComponent from "./header/Header";
import HeaderMenu from "./header-menu/HeaderMenu";

class Page extends React.Component {
  componentWillMount() {
    this.setState({
      pageComponents: [],
      readyComponents: [],
      menus: [],
      readyMenus: {
        navTop: null
      }
    });
    this.getPageComponents();
    this.getMenus();
  }

  getPageComponents() {
    Axios.get("http://localhost:8000/api/v1/pages/" + this.props.page.id)
      .then(response => {
        this.setState({ pageComponents: response.data.components });
        this.setState({ readyComponents: this.pageSetup() });
      })
      .catch(error => {
        console.error("Page components handle error", error);
      })
      .then(() => {
        console.log("Page components always executed", this.state);
      });
  }

  pageSetup() {
    // Definerer alle komponenter
    const AllComponents = {
      headercomponent: HeaderComponent
    };

    const readyComponents = [];

    // Looper igjennom komponentene til siden
    this.state.pageComponents.map(function(pageComponent, i) {
      const pageComponentsName = pageComponent.slug;

      // Looper igjennom alle de definerte komponentene
      Object.keys(AllComponents).map(function(slug) {
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

          readyComponents.push(<Comp {...componentFields} key={i} />);
        }
      });
    });

    return readyComponents;
  }

  getMenus() {
    Axios.get("http://localhost:8000/api/v1/menus")
      .then(response => {
        this.setState({ menus: response.data.data });

        let menus = {};

        for (let i = 0; i < this.state.menus.length; i++) {
          menus[this.state.menus[i].menu_location.slug] = this.state.menus[i];
        }

        this.setState({ readyMenus: menus });
      })
      .catch(error => {
        console.error("handle error", error);
      })
      .then(() => {
        console.log("always executed", this.state);
      });
  }

  render() {
    // console.log("a", this.state.readyMenus["navTop"]);
    const navTop = this.state.readyMenus.navTop;
    const condition = navTop != null;
    const itsTrue = <HeaderMenu menu={navTop} />;
    const itsFalse = null;

    return (
      <React.Fragment>
        {condition ? itsTrue : itsFalse}

        {this.state.readyComponents.map(function(pageComponent, i) {
          return pageComponent;
        })}
        {/* <FooterMenu /> */}
      </React.Fragment>
    );
  }
}

export default Page;
