import React from "react";
import styled from "styled-components";
import chef from "../images/chef.jpg";

const Styles = styled.div`
  .chef {
    position: relative;
    width: 100%;
    margin: 1.5 rem 3rem;
    padding 3rem 2rem;
    bacground-color:white;
    &-img {
      width: 80%;
      height: 100%;
      object-fit: scale-down;
      radius-border:2rem;
    }
  }

  h1{
    font-size:3rem;
    font-weight:300;
    line-height:3.5rem;
    margin-bottom:3rem;
    text-transform:uppercase;
    color:white;
}
  @media (min-width: 992px) {
    .chef {
      max-width: 25rem;
      margin: 1.5 rem 3rem;
      top: 50%;
      left: 35%;
      transform: translate(-50% -50%);
      &-img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }
  }
`;

function Chef() {
  return (
    <Styles>
      <div className="chef">
        <h1>Happy to cook, happy to live.</h1>
        <img className="chef-img" src={chef} />
      </div>
    </Styles>
  );
}

export default Chef;
