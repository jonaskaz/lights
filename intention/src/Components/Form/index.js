import React from "react";

import { StyledForm } from "./Form.styles";
import FormItem from "../FormItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        {this.props.options.map((item, _) => (
          <FormItem text={item}></FormItem>
        ))}
        <input type="submit" value="Submit" />
      </StyledForm>
    );
  }
}

export default Form;
