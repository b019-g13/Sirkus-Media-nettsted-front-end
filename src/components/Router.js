import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageComponent from "./Page";
import Header from "./header/Header";
import Axios from "axios";

class Router extends React.Component {
  componentWillMount() {
    this.setState({
      pages: [],
      chat: false,
      settings: []
    });
    this.getPages();
    this.getSettings();
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
  getPages() {
    Axios.get("https://api.b019-g13.group/api/v1/pages")
      .then(response => {
        this.setState({ pages: response.data.data });
        this.state.pages.map(page => {
          let slug = page.title.replace(" ", "-");
          page.slug = slug.toLowerCase();

          if (page.slug == "forside") {
            this.setState({ frontpage: page });
          }
        });
      })
      .catch(() => {
        console.error("Couldn't load pages");
      });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            {(this.state.frontpage && (
              <Route
                path={"/"}
                render={props => (
                  <PageComponent {...props} page={this.state.frontpage} />
                )}
              />
            )) || <Header overskrift-1="Laster ..." />}

            {this.state.pages.map(function(page, i) {
              return (
                <Route
                  key={i}
                  path={"/" + page.slug}
                  render={props => <PageComponent {...props} page={page} />}
                />
              );
            })}
          </Switch>
        </BrowserRouter>

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
              js.id = id;
              var e = document.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(js, e);
            })("chat-script", chat);
          })(this.state.chat)}
      </React.Fragment>
    );
  }
}

export default Router;
