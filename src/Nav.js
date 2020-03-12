import React from "react";
import "./App.css";
import styled from "styled-components";

const Styles = styled.div`
  nav {
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 15;
    background-image: linear-gradient(
      to right,
      rgb(9, 158, 89),
      rgb(24, 216, 168),
      rgb(147, 199, 50),
      rgb(24, 216, 168),
      rgb(147, 199, 50),
      rgb(24, 216, 168),
      rgb(9, 158, 89)
    );
  }
  .logo {
    color: aliceblue;
    margin-left: 2em;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 300;

    a {
      text-decoration: none;
      color: white;
    }
  }
  .nav-links {
    width: 40%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    color: aliceblue;
  }
  .link {
    list-style: none;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

const Nav = () => {
  return (
    <Styles>
      <div>
        <nav>
          <h3 className="logo">
            <a href="/">Nice Meal</a>
          </h3>

          <ul className="nav-links">
            <li>
              <a className="link" href="/recipes">
                Recipes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Styles>
  );
};
export default Nav;
