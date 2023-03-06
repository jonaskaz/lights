import React from "react";
import { StyledNav } from "./Navbar.styles";

class Navbar extends React.Component {
  render() {
    return <StyledNav>{this.props.content}</StyledNav>;
  }
}

export default Navbar;
