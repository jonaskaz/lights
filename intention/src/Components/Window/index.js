import React from "react";
import BottomBar from "../BottomBar";
import Navbar from "../Navbar";
import { StyledWindow } from "./Window.styles";

class Window extends React.Component {
  render() {
    return (
      <StyledWindow>
        <Navbar content={this.props.navcontent}></Navbar>
        {this.props.content}
        <BottomBar content={this.props.bottomcontent}></BottomBar>
      </StyledWindow>
    );
  }
}

export default Window;
