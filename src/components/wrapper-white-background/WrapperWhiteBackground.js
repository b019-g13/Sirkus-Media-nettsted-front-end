import React from "react";
import "./wrapper-white-background.scss";

class WrapperWhiteBackground extends React.Component {
  componentWillMount() {
    this.setState({
      children: []
    });

    if (this.props.children != null) {
      this.setState({
        children: this.props.children
      });
    }
  }
  render() {
    return (
      <div className="white-background">
        <section className="wrapper-white-background layout-boxed">
          {this.state.children.map(child => {
            return child;
          })}
        </section>
      </div>
    );
  }
}

export default WrapperWhiteBackground;
