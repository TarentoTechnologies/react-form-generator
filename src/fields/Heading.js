import React, { Component } from "react";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
  }

  render() {
    return (
      <div className="form-group">
        <div className="col-md-12 only-label">
          <label htmlFor="dateOfAssessment">
            {this.props.field.values[0].heading}
          </label>
          <p>{this.props.field.values[0].subHeading}</p>
        </div>
      </div>
    );
  }
}

export default Heading;
