import React from "react";
import Axios from "axios";
import HeaderComponent from "./header/Header";
import HeaderMenu from "./header-menu/HeaderMenu";
import ActionBoxFrontPage from "./action-box-front-page/ActionBoxFrontPage";
import AboutUs from "./about-us/AboutUs";
import Process from "./process/Process";
import ProcessStep from "./process-step/ProcessStep";

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

  // Definerer alle komponenter
  AllComponents = {
    headercomponent: HeaderComponent,
    actionboxfrontpage: ActionBoxFrontPage,
    aboutus: AboutUs,
    process: Process,
    processstep: ProcessStep
  };

  getPageComponents() {
    Axios.get("http://localhost:8000/api/v1/pages/" + this.props.page.id)
      .then(response => {
        const childComps = [
          {
            id: 123123,
            name: "ProcessStep",
            slug: "processstep",
            fields: [
              {
                id: 1340,
                name: "Process illustration",
                slug: "processIllustration",
                value: [
                  {
                    id: 121,
                    attribute_alt: "Illustrasjon i prosess",
                    url: "/images/header-illustration.png"
                  }
                ]
              },
              {
                id: 45453,
                name: "Process step heading",
                slug: "processStepHeading",
                value: "1. Vi hjelper deg"
              },
              {
                id: 45453,
                name: "Process step text",
                slug: "processStepText",
                value:
                  "Vi gjør alt fra A til Å Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis magna imperdiet, rhoncus lorem sed, laoreet arcu. Sed at malesuada tortor, sed vehicula augue. Curabitur feugiat at justo vitae interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            ]
          },
          {
            id: 123123,
            name: "ProcessStep",
            slug: "processstep",
            fields: [
              {
                id: 1340,
                name: "Process illustration",
                slug: "processIllustration",
                value: [
                  {
                    id: 121,
                    attribute_alt: "Illustrasjon i prosess",
                    url: "/images/header-illustration.png"
                  }
                ]
              },
              {
                id: 45453,
                name: "Process step heading",
                slug: "processStepHeading",
                value: "2. Hei på deg"
              },
              {
                id: 45453,
                name: "Process step text",
                slug: "processStepText",
                value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis magna imperdiet, rhoncus lorem sed, laoreet arcu. Sed at malesuada tortor, sed vehicula augue. Curabitur feugiat at justo vitae interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            ]
          },
          {
            id: 12313423,
            name: "ProcessStep",
            slug: "processstep",
            fields: [
              {
                id: 1340,
                name: "Process illustration",
                slug: "processIllustration",
                value: [
                  {
                    id: 121,
                    attribute_alt: "Illustrasjon i prosess",
                    url: "../images/header-illustration.png"
                  }
                ]
              },
              {
                id: 45453,
                name: "Process step heading",
                slug: "processStepHeading",
                value: "3. Hade"
              },
              {
                id: 45453,
                name: "Process step text",
                slug: "processStepText",
                value:
                  "Sed id egestas lorem. Ut orci ipsum, finibus id condimentum in, elementum quis dolor. Quisque vitae arcu pretium, tincidunt leo eu, tempor enim. Quisque non erat justo."
              }
            ]
          }
          // {
          //   id: 1231423,
          //   name: "ProcessStep",
          //   slug: "processstep",
          //   fields: [
          //     {
          //       id: 10,
          //       name: "Action box acpl icon",
          //       slug: "actionBoxACPLIcon",
          //       value: [
          //           {
          //             id: 121,
          //             attribute_alt: "Illustrasjon i prosess",
          //             url: "/images/header-illustration.png"
          //           }
          //         ]
          //     },
          //     {
          //       id: 45453,
          //       name: "Mitt field 2",
          //       slug: "mittField2",
          //       value: "verdi 31"
          //     }
          //   ]
          // }
        ];

        response.data.components[5].children = childComps;

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

  setupComponent(component, i) {
    const ReactComponent = this.AllComponents[component.slug];

    if (ReactComponent != null) {
      let componentFields = {};

      // Looper gjennom alle fields/props til komponenten
      for (let field = 0; field < component.fields.length; field++) {
        const slug = component.fields[field].slug;
        const value = component.fields[field].value;

        componentFields[slug] = value;
      }

      if (component.children == null) {
        return (
          <ReactComponent {...componentFields} key={i + "-" + component.id} />
        );
      } else {
        let componentChildren = [];

        component.children.map((child, j) => {
          componentChildren.push(this.setupComponent(child, i + "-" + j));
        });

        return (
          <ReactComponent
            {...componentFields}
            children={componentChildren}
            key={i + "-" + component.id}
          />
        );
      }
    }
  }

  pageSetup() {
    const readyComponents = [];

    // Looper igjennom komponentene til siden
    this.state.pageComponents.map((component, i) => {
      readyComponents.push(this.setupComponent(component, i));
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
