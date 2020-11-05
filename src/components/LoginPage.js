import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'


const Container = styled.div`
    background-color: #FFFCEF;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;   
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageLogo = styled.img`
    width: 300px;
    height: 300px;
`

const ButtonFull = styled.button`
    width: 250px;
    background-color: #43ADA5;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 400ms;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
    background-color: white;
    color: #43ADA5;
    border: 2px solid #43ADA5;
  }
`

const ButtonTransparent = styled.button`
    width: 250px;
    background-color: white;
    color: #43ADA5;
    font-size: 18px;
    outline: none;
    font-weight: bold;
    padding: 10px;
    border: 2px solid #43ADA5;
    border-radius: 10px;
    transition: 400ms;
    cursor: pointer;
    margin-top: 15px;
    text-transform: uppercase;

    &:hover {
        background-color: #14887e;
        color: white;
  }
`

class LoginPage extends React.Component {

    render() {
      return (
        <Container>
            <LogoContainer>
                <ImageLogo src={Logo} />    
            </LogoContainer>    

            <LoginContainer>      
                <ButtonFull onClick={} >Quero Vender</ButtonFull>
                <ButtonTransparent>Quero Comprar</ButtonTransparent>
            </LoginContainer>          
        </Container>
      )
    }
  }

export default LoginPage;
