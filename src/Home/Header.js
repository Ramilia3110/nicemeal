import React from "react";
import "../App.css";
import styled from "styled-components";
import headerimg from "../images/header.jpg";

const Styles = styled.div`
  .header {
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header h1 {
    color: white;
    font-weight: 300;
    font-size: 3.8rem;
    text-transform: uppercase;
    line-height: 4.2rem;
  }
  @media (min-width: 992px) {
    .header h1 {
      font-size: 5rem;
    }
  }
`;

const Header = () => {
  return (
    <Styles>
      <div className="header">
        <h1>We are what we eat</h1>
      </div>
    </Styles>
  );
};

export default Header;
