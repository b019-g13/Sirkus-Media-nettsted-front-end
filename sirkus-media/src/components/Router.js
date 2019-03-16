import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageComponent from "./Page";
import Axios from "axios";

class Router extends React.Component {
  componentWillMount() {
    this.setState({ pages: [] });
    this.getPages();
  }

  getPages() {
    Axios.get("http://localhost:8000/api/v1/pages")
      .then(response => {
        this.setState({ pages: response.data.data });
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
      <BrowserRouter>
        <Switch>
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
    );
  }
}

export default Router;
