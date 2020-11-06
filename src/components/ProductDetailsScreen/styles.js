import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #FFFCEF;
  width: 70%;
  height: 350px;
  display: grid;
  grid-template-columns: 1fr 300px;
  padding: 20px;
  margin: 32px auto;
`
export const ImgContainer = styled.div`
  width: 90%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
export const ProductDetailsContainer = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: relative;
`
export const ProductName = styled.h2`
  color: #43ADA5;
  margin: 5px 0;
`
export const ProductPrice = styled.p`
  color: #43434F;
  font-size: 18px;
  font-weight: bold;
  margin: 0 5px;
`
export const ProductInstallments = styled.p`
  color: #43434F;
  font-size: 14px;
  margin: 0 8px;
`
export const ProductPaymentMethod = styled.span`
  width: 50px;
  color: #FFF;
  font-weight: bold;
  background-color: #FCCA64;
  font-size: 14px;
  padding: 5px;
  margin: 10px 5px;
  text-align: center;
  border-radius: 5px;
`

export const ProductDescription = styled.p`
  width: 70%;
  color: #F04E3E;
  font-weight: bold;
  margin: 5px 8px;
`
export const Button = styled.button`
  width: 80%;
  background-color: #43ADA5;
  color: #FFF;
  font-size: 18px;
  outline: none;
  font-weight: bold;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 400ms;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  left: 25px;
  right: auto;

  &:hover {
    background-color: #14887e;
  }
`