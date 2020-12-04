import React, { Component } from 'react';

/*Imagens*/
import ImageOne from '../../img/banner-one.jpg';
import ImageTwo from '../../img/banner-two.png';
import ImageThree from '../../img/banner-three.png';
import ImageFour from '../../img/banner-four.png';
import ImageFive from '../../img/banner-five.png';

/*Tags Styleds*/
import {
  CarouselContainer,
  CarouselImg,
  LeftController,
  RightController,
  ButtonImg
} from './styles';

let myVar;

export default class Carousel extends Component {
  state = {
    images: [
      ImageOne,
      ImageTwo,
      ImageThree,
      ImageFour,
      ImageFive
    ],
    count: 0
  }

  nextBanner = () => {
    if (this.state.count < 4) {
      this.setState({ count: this.state.count + 1 })
    } else {
      this.setState({ count: 0 })
    }
  }

  beforeBanner = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    } else {
      this.setState({ count: 4 })
    }
  }

  setImage = () => {
    this.state.count === 4 ? this.setState({ count: 0 }) : this.nextBanner();
  }

  stopSetImage() {
    clearInterval(myVar);
  }

  myVar = setInterval(this.setImage, 5000);
  
  render() {
    return (
      <CarouselContainer>
        <LeftController onClick={this.beforeBanner}>
          <ButtonImg src="https://img.icons8.com/fluent-systems-regular/24/000000/back.png" />
        </LeftController>
        <CarouselImg src={this.state.images[this.state.count]} />
        <RightController onClick={this.nextBanner}>
          <ButtonImg src="https://img.icons8.com/fluent-systems-regular/24/000000/forward.png" />
        </RightController>
      </CarouselContainer>
    )
  }
}