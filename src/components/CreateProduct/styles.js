import styled from 'styled-components';

export const CreateContainer = styled.div`
  width: 70%;
  height: 500px;
  background-color: #FFFCEF;
  margin: 32px auto;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  padding: 20px;
`
export const TitleContainer = styled.div`
  max-width: 150px;
`
export const Title = styled.h2`
  margin: 50px 0 10px 70px;
  color: #43ADA5;
`
export const ItensContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 55px);
  position: relative;
`
export const ItemContainer = styled.div`
  max-width: 90%;
  margin: 50px 30px 80px 90px;
  display: grid;
  grid-template-columns: 150px 1fr;
`
export const Label = styled.label`
  background-color: #43ADA5;
  max-height: 20px;
  color: #FFF;
  font-weight: bold;
  padding: 10px 70px 10px 10px;
  border-radius: 5px 0 0 5px;
`
export const Input = styled.input`
  max-width: 90%;
  max-height: 16px;
  padding: 10px;
  border: 2px solid #43ADA5;
  font-weight: bold;
  background-color: #FFF;
  border-radius: 0 5px 5px 0;
  outline: none;

  &::placeholder {
    font-size: 18px;
    font-weight: bold;
  }
`
export const Select = styled.select`
  max-width: 95%;
  max-height: 40px;
  padding: 8px;
  font-size: 18px;
  border: 2px solid #43ADA5;
  background-color: #FFF;
  border-radius: 0 5px 5px 0;
  outline: none;
`
export const Option = styled.option`
  max-width: 95%;
  font-size: 18px;
  outline: none;
  font-weight: bold;
`
export const Button = styled.button`
  width: 250px;
  background-color: #43ADA5;
  color: #FFF;
  font-size: 18px;
  outline: none;
  font-weight: bold;
  position: absolute;
  right: 65px;
  bottom: 20px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 400ms;
  cursor: pointer;

  &:hover {
    background-color: #14887e;
  }
`

