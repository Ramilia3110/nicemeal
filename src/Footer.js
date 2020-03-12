import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    color: white;
    text-align: center;
    font-size: 0.7rem;
    letter-spacing: 0.25rem;
    padding: 3rem auto;
    margin: 2rem auto;
  }
`;

function Footer() {
  return (
    <Styles>
      <div className="footer">
        <p>© 2020 Created By Ramilia Imankulova.All Rights Reserved.</p>
      </div>
    </Styles>
  );
}

export default Footer;
