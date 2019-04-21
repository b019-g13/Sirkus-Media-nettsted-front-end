import React from "react";
import "./employee.scss";
class Employee extends React.Component {
  render() {
    let employeeLeftImg = this.props["img"];
    if (employeeLeftImg) {
      employeeLeftImg = (
        <img
          src={employeeLeftImg.url_full}
          alt={employeeLeftImg.attribute_alt}
        />
      );
    }

    let employeeRighth2 = this.props["h2"];
    if (employeeRighth2) {
      employeeRighth2 = <h2>{employeeRighth2}</h2>;
    }

    let employeeRightRole = this.props["h3"];
    if (employeeRightRole) {
      employeeRightRole = <p className="employee-role">{employeeRightRole}</p>;
    }

    let employeeRightP = this.props["p"];
    if (employeeRightP) {
      employeeRightP = <p>{employeeRightP}</p>;
    }

    return (
      <article className="about-us-emp">
        <section className="about-us-emp-left">{employeeLeftImg}</section>
        <section className="about-us-emp-right">
          {employeeRighth2}
          {employeeRightRole}
          {employeeRightP}
        </section>
      </article>
    );
  }
}

export default Employee;
