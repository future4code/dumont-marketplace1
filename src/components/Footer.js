import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'

import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"


const FooterContainer = styled.div`
    bottom: 0px;
    background-color: #FCCA64;
    width: 100vw;
    height: 360px;    
`
const InfosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #43434F;
      font-weight: 700;
      text-align: center;
    }
`

const ImageLogo = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 20px;
`

const LinksContainer = styled.div`
  
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    color: #43434F;
    text-decoration: none;
    margin-right: 100px;
  }

  a:hover {
    color: white;
  } 
`

class Footer extends React.Component {
  
      render() {
        return (
            <FooterContainer>     
              <InfosContainer>
                  <ImageLogo src={Logo} />                    
                  <p>
                    4Used © 2020 - Todos os direitos reservados.<br />
                    Av. Labenu, 420, Centro - SP, 0909609-400<br />
                  </p>
              </InfosContainer>

              <LinksContainer>
                <a href="http://www.twitter.com" target="_blank"><FaTwitterSquare size={40} /></a>
                <a href="http://www.facebook.com" target="_blank"><FaFacebookSquare size={40} /></a>    
                <a href="http://www.instagram.com" target="_blank"><FaInstagramSquare size={40} /></a> 
              </LinksContainer>   
            </FooterContainer>
        )
      }
    }
  
  export default Footer;



