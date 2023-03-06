import React from "react";
import { StyledBar } from "./BottomBar.styles";

class BottomBar extends React.Component {
  render() {
    return <StyledBar>{this.props.content}</StyledBar>;
  }
}

export default BottomBar;
