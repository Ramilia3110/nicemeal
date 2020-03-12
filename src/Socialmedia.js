import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Styles = styled.div`
  .social-media {
    background: white;
    padding: 1.6rem 3.2rem;
    text-align:center;
    h3{
        font-size:1.1rem;
        font-weight:300;
        padding:3rem auto;
    }
  }
  .social {
    height:1rem;
    width:1rem;
      margin: 1rem 1rem;
      transition:transform .25s ease;
      display:inline-block;
      &:hover{
          transformY(-2px);
      }
     }

     .twitter{
        color:#00acee;
    }
    .youtube{
        color: #FF0000;
    }
    .facebook{
        color:#3b5998;
    }
    .instagram{
        color:#C13584;
    }
    .telegram{
        color:#0088cc;
    }
  

`;

function Socialmedia() {
  return (
    <Styles>
      <div className="social-media">
        <h3>You can also find us on social media.</h3>
        <a href="#" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="#" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="#" className="telegram social">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
      </div>
    </Styles>
  );
}

export default Socialmedia;
