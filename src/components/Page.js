import React from "react";
import Axios from "axios";
import Header from "./header/Header";
import HeaderMenu from "./header-menu/HeaderMenu";
import ActionBoxFrontPage from "./action-box-front-page/ActionBoxFrontPage";
import AboutUs from "./about-us/AboutUs";
import Process from "./process/Process";
import ProcessStep from "./process-step/ProcessStep";
import { isArray } from "util";
import IconText from "./icon-text/IconText";
import Contact from "./contact/Contact";
import ContactForm from "./contact-form/ContactForm";
import Footer from "./footer/Footer";

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
    header: Header,
    actionboxfrontpage: ActionBoxFrontPage,
    icontext: IconText,
    aboutus: AboutUs,
    process: Process,
    processstep: ProcessStep,
    contact: Contact,
    contactform: ContactForm,
    footer: Footer
  };

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

  setupComponent(component, i) {
    const ReactComponent = this.AllComponents[component.slug];

    if (ReactComponent != null) {
      let componentFields = {};

      // Looper gjennom alle fields/props til komponenten
      for (let field = 0; field < component.fields.length; field++) {
        const slug = component.fields[field].slug;
        const value = component.fields[field].value;

        if (componentFields[slug] == null) {
          componentFields[slug] = value;
        } else {
          if (!isArray(componentFields[slug])) {
            componentFields[slug] = [componentFields[slug]];
          }

          componentFields[slug].push(value);
        }
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

    console.warn("Couldn't find component: ", component.slug);
    return null;
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
