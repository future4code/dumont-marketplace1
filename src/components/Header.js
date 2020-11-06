import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa"

const HeaderContainer = styled.div`
  display: flexbox;
  align-items: center;
  justify-content: center;
`

const InputBusca = styled.input`
  border-radius: 4px;
  -moz-border-radius: 4px;
  height: 30px;
  background-color:#43ADA5;

  &::placeholder{
    color: white;
    font-weight: bold;
  }
`

const Busca = styled.div`
  position: absolute;
  top: 30px;
  right: 300px;
`

const H1 = styled.h1`
  margin-right: 30px;
`

const ButtonFull = styled.button`
    width: 250px;
    background-color: #43ADA5;
    color: white;
    font-size: 18px;
    outline: none;
    font-weight: bold;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 400ms;
    cursor: pointer;

    &:hover {
    background-color: white;
    color: #43ADA5;
    border: 2px solid #43ADA5;
  }
`


class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <img src={ Logo }></img>
        <Busca>
        <InputBusca type="text" placeholder="BUSCA" size="80"></InputBusca>
        <FaSearch size={40} />
        </Busca>
        <H1>HOME</H1>
        <H1>PRODUTOS</H1>
        <H1>CARRINHO</H1>
        <ButtonFull type="submit">LOGOUT</ButtonFull>
    </HeaderContainer>
    )
  }
}

export default Header;