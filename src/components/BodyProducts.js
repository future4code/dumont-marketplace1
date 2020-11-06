import React from "react";
import styled from "styled-components";
import axios from "axios";

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 150px;
  position: relative;
  font-weight: bold;
  background-color: #fff;
  border-radius: 5px;
`;

const BodySpan = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  border: 2px solid #43ada5;
  font-weight: bold;
  background-color: #fff;
  border-radius: 5px;
`;

const ParagraphPrice = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #43ada5;
  color: #fff;
  font-size: 13px;
  margin: 10px;
  font-weight: bold;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 400ms;
  cursor: pointer;

  &:hover {
    background-color: #14887e;
  }
`;

const Image = styled.img`
  max-width: 98%;
  max-height: 200px;
`;

class BodyProducts extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products"
      );
      this.setState({ products: response.data.products });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <BodyContainer>
        {this.state.products.map((product) => {
          return (
            <BodySpan>
              <Image src={product.photos[0]} alt={product.name} />
              <ParagraphPrice>{product.name}</ParagraphPrice>
              <ParagraphPrice>R$ {product.price}</ParagraphPrice>
              <ParagraphPrice>
                R${" "}
                {Math.abs(product.price - (product.price / 70) * 100).toFixed(
                  2
                )}
              </ParagraphPrice>

              <Button>Ir Para o Carrinho Adicionado</Button>
            </BodySpan>
          );
        })}
      </BodyContainer>
    );
  }
}

export default BodyProducts;
