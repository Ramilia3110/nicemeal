import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .recipe-container {
    margin: 0 0.5rem 3rem 0.5rem;
    width: 100%;
  }
  .recipe-img {
    object-fit: cover;
    width: 100%;
    border-radius: 3rem;
  }
  .recipe-content {
    background-color: white;
    width: 100%;
    border-radius: 3rem;
    padding: 2rem;
    p {
    }
  }
  @media (min-width: 992px) {
    .recipe-img {
      width: 40%;
      max-size: 25rem;
    }

    .recipe-content {
      max-size: 25rem;
      width: 40%;
    }
  }
`;

const Recipe = ({ title, cuisine, image, instructions }) => {
  return (
    <Styles>
      <div className="recipe">
        <div className="recipe-row">
          <div className="recipe-container">
            <img className="recipe-img" src={image} alt=" " />
            <div className="recipe-content">
              <h1>{title}</h1>
              <h4>Cuisine: {cuisine}</h4>
              <p>{instructions} </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Recipe;
