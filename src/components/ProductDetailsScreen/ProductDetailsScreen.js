import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  ProductContainer,
  ImgContainer,
  Img,
  ProductDetailsContainer,
  ProductName,
  ProductPrice,
  ProductInstallments,
  ProductPaymentMethod,
  ProductDescription,
  Button
} from './styles';

/*Variáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products';

export default class ProductDetailsScreen extends Component {
  state = {
    products: [],
    product: [],
    photos: '',
    name: '',
    price: '',
    installments: '',
    installmentsPrice: '',
    paymentMethod: '',
    description: ''
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get(baseUrl)
      this.setState({ products: response.data.products })
    } catch (error) {
      console.log(error.message)
    }

    this.handleProduct();
  }

  handleProduct = (id) => {
    const product = this.state.products.filter(product => {
      return product.id === 't2b4iU0Yro6fatGSNphZ'
    })

    this.setState({product: product})

    product.forEach(p => {
      this.setState({ 
        photos: p.photos[0],
        name: p.name,
        price: p.price.toFixed(2),
        installments: p.installments,
        installmentsPrice: (p.price / p.installments).toFixed(2),
        paymentMethod: p.paymentMethod === 'card' ? "Cartão" : "Boleto",
        description: p.description
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.product.length > 0 && (
          <ProductContainer>
            <ImgContainer>
              <Img src={this.state.photos} />
            </ImgContainer>

            <ProductDetailsContainer>
              <ProductName>{this.state.name}</ProductName>
              <ProductPrice>R$ {this.state.price}</ProductPrice>
              <ProductInstallments>
                {this.state.installments}x {" "}
                {this.state.installmentsPrice}
              </ProductInstallments>
              <ProductPaymentMethod>{this.state.paymentMethod}</ProductPaymentMethod>
              <ProductDescription>{this.state.description}.</ProductDescription>
              <Button>Comprar</Button>
            </ProductDetailsContainer>
          </ProductContainer>
        )
        }
      </div>
    )
  }
}