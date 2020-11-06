import React, { Component } from 'react';
/*Componentes*/
import Carousel from './Carousel/Carousel';
import CreateProduct from '../components/CreateProduct/CreateProduct';
import LoginPage from './LoginPage'
import Header from "./Header"
import Footer from "./Footer"
import BodyProducts from './BodyProducts'

export class AppContainer extends Component {

  state = {
    viewLoginPage: true,
    viewBodyProducts: false,
    viewCreateProduct: false,

  }
   
  renderLoginPage = () => {
    this.setState({ 
      viewLoginPage: false, 
      viewCreateProduct: true  
    })
  }

  renderBodyProducts = () => {
    this.setState({
    viewBodyProducts: true,   
    viewLoginPage: false,    
    viewCreateProduct: false  
    })
  }


  render() {
    return (
      <div>
        <Header /> 
        { this.state.viewLoginPage && <LoginPage renderSeller={this.renderLoginPage}/> }
        { this.state.viewCreateProduct && <CreateProduct /> }

        { this.state.viewBodyProducts && <BodyProducts renderCostumer={this.renderBodyProducts }/> }
        <Footer />
      </div>
    )
  }
}
