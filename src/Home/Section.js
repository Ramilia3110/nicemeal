import React from "react";
import "../App.css";
import styled from "styled-components";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";

const Styles = styled.div`
  .section {
    background-color: white;
    margin: 8rem 3rem 1rem 3rem;
    padding: 12rem auto;
    &-heading {
        margin: 3rem auto;
        font-size: 3.5rem;
        letter-spacing: 0.35rem;
        font-weight: 300;
        color: #182E0B  ;
      }
  }
 
  .row {
   min-height: 100vh;
  }
  .col-1-of-2 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        margin: 1.5rem auto;
        padding: 1rem 1rem;
        font-size:2rem;
        font-weight:300;
      }
  }
  
  .col-2-of-2 {
    margin-top:5rem;
    width: 100%;
    height: auto;
  }
  .composition {
    position: relative;
    &__photo {
      width: 100%;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
      border-radius: 3px;
      position: relative;
      outline-offset: 2rem;
      transition: all 0.2s;
      margin 3rem auto;
    }
  }
  @media (min-width: 992px) {
    .row {
      display: grid;
      grid-template-rows: min-content;
      grid-template-columns:
        [full-start first-start] minmax(50vw, min-content)
        [first-end second-start] minmax(50vw, min-content)
        [second-end full-end];
    }
    .col-1-of-2 {
      grid-column: first-start/first-end;

      h3 {
        padding: 1.2rem 1rem;
       
      }
      p{
          line-height:1.7rem;
      }
    }
    .col-2-of-2 {
      grid-column: second-start/second-end;
      margin-top:0;
    }

    .composition {
      position: relative;
      &__photo {
        width: 40%;
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        position: absolute;
        z-index: 10;
        outline-offset: 2rem;
        transition: all 0.2s;
        &--1 {
          left: 0;
          top: 2rem;
        }
        &--2 {
          right: 11rem;
          top: 13rem;
        }
        &--3 {
          left: 0;
          top: 25rem;
        }
      }
    }
  }
`;

const Section = () => {
  return (
    <Styles>
      <div className="section">
        <h2 className="section-heading">
          Positive atmosphere with healthy food.
        </h2>
        <div className="row">
          <div className="col-1-of-2">
            <h3>Make your food incredible, tasty and healthy.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              image compasition nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>

            <h3>Make your food incredible, tasty and healthy.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              image compasition nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
          <div className="col-2-of-2">
            <div className="composition">
              <img
                src={p3}
                className="composition__photo composition__photo--1"
              />
              <img
                src={p1}
                className="composition__photo composition__photo--2"
              />
              <img
                src={p2}
                className="composition__photo composition__photo--3"
              />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Section;
