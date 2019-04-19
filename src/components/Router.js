import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageComponent from "./Page";
import Header from "./header/Header";
import Axios from "axios";

class Router extends React.Component {
  componentWillMount() {
    this.setState({ pages: [] });
    this.getPages();
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
      .catch(error => {
        console.error("handle error", error);
      })
      .then(() => {
        console.log("always executed", this.state);
      });
  }

  render() {
    return (
      <React.Fragment>
        {/* {this.state.pages.map(function(page, i) {
          return (
            <div key={i}>
              <a href={"/" + page.id}>{page.title}</a>
            </div>
          );
        })} */}

        <BrowserRouter>
          <Switch>
            {(this.state.frontpage && (
              <Route
                exact
                path={"/"}
                render={props => (
                  <PageComponent {...props} page={this.state.frontpage} />
                )}
              />
            )) || <Header overskrift-1="Laster ..." tekst={[]} />}

            {this.state.pages.map(function(page, i) {
              return (
                <Route
                  key={i}
                  exact
                  path={"/" + page.id}
                  render={props => <PageComponent {...props} page={page} />}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Router;
