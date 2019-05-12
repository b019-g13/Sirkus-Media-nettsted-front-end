import React from "react";
import Axios from "axios";
import Header from "./header/Header";
import HeaderMenu from "./header-menu/HeaderMenu";
import ActionBox from "./action-box/ActionBox";
import ActionBoxFrontPage from "./action-box-front-page/ActionBoxFrontPage";
import ActionBoxFrontPageChild from "./action-box-front-page-child/ActionBoxFrontPageChild";
import ActionBoxOther from "./action-box-other/ActionBoxOther";
import AboutUs from "./about-us/AboutUs";
import AboutUsChild from "./about-us-child/AboutUsChild";
import Employee from "./employee/Employee";
import Process from "./process/Process";
import ProcessStep from "./process-step/ProcessStep";
import { isArray } from "util";
import IconText from "./icon-text/IconText";
import IconLink from "./icon-link/IconLink";
import WrapperWhiteBackground from "./wrapper-white-background/WrapperWhiteBackground";
import HeadingText from "./heading-text/HeadingText";
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
        top: null
      },
      chat: false
    });
    this.getPageComponents();
    this.getMenus();
    this.getSettings();
  }

  // Definerer alle komponenter
  AllComponents = {
    header: Header,
    "action-box": ActionBox,
    "action-box-front-page": ActionBoxFrontPage,
    "action-box-other": ActionBoxOther,
    "action-box-front-page-child": ActionBoxFrontPageChild,
    "icon-text": IconText,
    "icon-link": IconLink,
    "heading-text": HeadingText,
    "wrapper-white-background": WrapperWhiteBackground,
    "about-us": AboutUs,
    "about-us-child": AboutUsChild,
    employee: Employee,
    process: Process,
    "process-step": ProcessStep,
    contact: Contact,
    "contact-form": ContactForm,
    footer: Footer
  };

  getPageComponents() {
    Axios.get("https://api.b019-g13.group/api/v1/pages/" + this.props.page.slug)
      .then(response => {
        const pageData = {
          id: response.data.id,
          title: response.data.title,
          slug: response.data.slug
        };

        this.setState({ page: pageData });
        this.setState({ pageComponents: response.data.components });
        this.setState({ readyComponents: this.pageSetup() });
      })
      .catch(error => {
        console.error("Page components handle error", error);
      })
      .then(() => {
        // console.log("Page components always executed", this.state);
      });
  }

  setupComponent(component, i) {
    const ReactComponent = this.AllComponents[component.slug];

    if (ReactComponent != null) {
      let componentFields = {};

      if (component.fields != null) {
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

    let slug = this.state.page.title.replace(" ", "-");
    slug = slug.toLowerCase();

    document.body.classList.add(slug);

    // Looper igjennom komponentene til siden
    this.state.pageComponents.map((component, i) => {
      readyComponents.push(this.setupComponent(component, i));
    });

    return readyComponents;
  }

  getMenus() {
    Axios.get("https://api.b019-g13.group/api/v1/menus")
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
        // console.log("always executed", this.state);
      });
  }

  getSettings() {
    Axios.get("https://api.b019-g13.group/api/v1/site_settings/chat")
      .then(response => {
        this.setState({ chat: response.data.value });
      })
      .catch(() => {
        console.error("Couldn't load chat");
      });
  }

  render() {
    // const top = this.state.readyMenus[1];
    // const condition = top != null;
    // const itsTrue = <HeaderMenu menu={top} />;
    // const itsFalse = null;

    let top = this.state.readyMenus["top"];
    let headerMenu;
    if (top != null) {
      headerMenu = <HeaderMenu menu={top} />;
    }

    return (
      <React.Fragment>
        {/* {condition ? itsTrue : itsFalse} */}
        {headerMenu}

        {this.state.readyComponents.map(function(pageComponent) {
          return pageComponent;
        })}
        {/* <FooterMenu /> */}

        {this.state.chat &&
          (function(chat) {
            if (!chat) {
              return;
            }

            (function(id, src) {
              if (document.getElementById(id)) {
                return;
              }
              var js = document.createElement("script");
              js.src = src;
              js.type = "text/javascript";
              js.setAttribute("async", "");
              js.setAttribute("defer", "");
              js.id = id;
              var e = document.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(js, e);
            })("chat-script", chat);
          })(this.state.chat)}
      </React.Fragment>
    );
  }
}

export default Page;
