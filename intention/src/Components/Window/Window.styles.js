import styled from "styled-components";
import clouds from "../../Images/clouds.jpg";

export const StyledWindow = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: auto;
  min-width: 600px;
  max-width: 90%;
  border: 2px solid #afaeae;
  border-radius: 2px;
  position: relative;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.3), -1px -1px #dee2e680;
  display: inline-block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  margin: 20px;
  padding: 0px 0px 10px 0px;
  text-align: center;
  @media (max-width: 767px) {
    min-width: 200px;
  }
`;
