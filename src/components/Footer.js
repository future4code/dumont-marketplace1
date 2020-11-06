import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0px;
    background-color: #FCCA64;
    width: 100vw;
    height: 300px;    
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
    width: 200px;
    height: 200px;
`

const LinksContainer = styled.div`
  
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    color: #43434F;
    text-decoration: none;
    margin: 20px;
    
  }

  a:hover {
    color: #43434F;
    border-bottom: 2px solid #FFFCEF;
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
                <a href="http://www.twitter.com" target="_blank">Twitter</a>
                <a href="http://www.facebook.com" target="_blank">Facebook</a>    
                <a href="http://www.instagram.com" target="_blank">Instagram</a> 
              </LinksContainer>   
            </FooterContainer>
        )
      }
    }
  
  export default Footer;



