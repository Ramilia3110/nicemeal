import React from "react";
import "../App.css";
import styled from "styled-components";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";

const Styles = styled.div`
.container{
  width:100vw;
  overflow:hidden;
}
  .section {
    background-color: white;
    margin: 8rem 1rem 1rem 1rem;
    padding: 12rem auto;
    &-heading {
        margin: 1.5rem auto;
        font-size: 2rem;
        padding-top:2rem;
        letter-spacing: 0.35rem;
        font-weight: 300;
        color: #182E0B;
      }
  }
 
  .row {
   min-height: 100vh;
  }
  .col-1-of-2 {
    width: 90%;
    margin:0 auto;
    height:100%;
    text-align: center;
    h3 {
        margin: 1.5rem auto;
        padding: 1rem 1rem;
        font-size:1.5rem;
        font-weight:300;
      }
      p{
        font-size:1rem;
        line-height:1.5rem;
        padding:0 .3rem;
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

    .section {
      background-color: white;
      padding: 12rem auto;
      &-heading {
          margin: 2rem auto;
          padding-top:3rem;
          font-size: 3rem;
          letter-spacing: 0.35rem;
        }
    }
   

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
        padding: 3rem .5rem 1rem .5rem;
        font-weight:300;
       
      }
      p{
          font-size:1rem;
          line-height:1.7rem;
          padding:1rem 1.5rem .5rem 1.5rem;
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
      <div className="container">
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
              </p>

              <h3>Make your food incredible, tasty and healthy.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                image compasition nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
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
      </div>
    </Styles>
  );
};

export default Section;
