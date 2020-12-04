import styled from 'styled-components';

export const LeftController = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #FFF;
  position: absolute;
  top: 35%;
  left: -5%;
  opacity: 0;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 400ms;
`
export const RightController = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #FFF;
  position: absolute;
  top: 35%;
  right: -5%;
  opacity: 0;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 400ms;
`
export const CarouselContainer = styled.div`
  width: 80%;
  height: 300px;
  background-color: black;
  margin: 32px auto;
  border-radius: 5px;
  position: relative;

  &:hover {
    ${LeftController} {
      opacity: 1;
      left: 1%;
    }
    ${RightController} {
      opacity: 1;
      right: 1%;
    }
  }
`
export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  
`
export const ButtonImg = styled.img`
  opacity: 0.3;
`
