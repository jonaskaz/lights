import React from "react";
import { StyledFormItem } from "./FormItem.styles";

class FormItem extends React.Component {
  render() {
    return <StyledFormItem>{this.props.text}</StyledFormItem>;
  }
}

export default FormItem;
