import React from "react";
import styled from "styled-components"

export const DivShoppingCart = styled.div`
    width: 70%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 400px;
    padding: 20px;
    margin: 32px auto;
    position: relative;
`

export const ShoppingCartItems = styled.div`
    position: relative;
    width: 80%;
    height: 380px;
    display: grid;
    grid-template-rows: 1fr 300px;
    padding: 20px;
    background-color: #43434F;
    color: white;
    border-radius: 33px;
    margin: 10px auto;
    font-size: 20px;
`

export const DivTotal = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
    color: black;
    background-color: #F04E3E;
    height: 100px;
    border-radius: 31px;
    bottom: 0px;
`

export const CartItem = styled.div `
    display: flex;
`

export const Header = styled.header `

`

export const CartBody = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    align-items: center; 
    text-align: center;

    h5 {
        margin: 0;
        font-size: 16px;
    }

    span {
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
        
    }
`

export const DivButtons = styled.div`
    display: flex;
    position: absolute;
    width: 800px;
    bottom: 20px;
    right: 38px;
    justify-content: space-between;
`

export const KeepShoppingButton = styled.button`
    display: flex;
    color: #43ADA5;
    background-color: white;
    border-color: #43ADA5;
    height: 50px;
    width: 410px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
`

export const CheckoutButton = styled.button`
    display: flex;
    color: white;
    background-color: #43ADA5;
    height: 50px;
    width: 370px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;

`

export const InfoProducts = styled.div`
    display: flex;
    flex-direction: column;
    height: 140px;
    width: 300px;
    box-sizing: border-box;
    color: #FCCA64;

    h4, h5 {
        margin: 0;
    }
`

export const DivTitulo = styled.div`
    color: #43ADA5;
    font-size: 30px;
    margin: 0 10px;
`

class ShoppingCart extends React.Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <Header>
                    HEADER VAI AQUI!
                </Header>
                <DivTitulo>
                    <h5>CARRINHO</h5>
                </DivTitulo>
                <hr />
                <DivShoppingCart>
                    <div>
                        <CartItem>
                            <div>
                                <img src="https://picsum.photos/200?a1"/>
                            </div>
                            <CartBody>
                                <ContainerItem>
                                    <h5>
                                        Nome:
                                    </h5>
                                    <span>
                                        Nome do produto
                                    </span>
                                </ContainerItem>
                                <ContainerItem>
                                <label>Pagamento: </label>
                                    <select>
                                        <option></option>
                                        <option>Transferência</option>
                                        <option>Cartão</option>
                                        <option>Dinheiro</option>
                                    </select>
                                </ContainerItem>
                                <ContainerItem>
                                    <label>Quantidade: </label>
                                    <input type="number"></input>
                                </ContainerItem>
                            </CartBody>
                        </CartItem>
                        <hr />
                        <CartItem>
                            <div>
                                <img src="https://picsum.photos/200?a2"/>
                            </div>
                            <CartBody>
                                <ContainerItem>
                                    <h5>
                                        Nome:
                                    </h5>
                                    <span>
                                        Nome do produto
                                    </span>
                                </ContainerItem>
                                <ContainerItem>
                                <label>Pagamento: </label>
                                    <select>
                                        <option></option>
                                        <option>Transferência</option>
                                        <option>Cartão</option>
                                        <option>Dinheiro</option>
                                    </select>
                                </ContainerItem>
                                <ContainerItem>
                                    <label>Quantidade: </label>
                                    <input type="number"></input>
                                </ContainerItem>
                            </CartBody>
                        </CartItem>
                        <hr />
                    </div>
                    <ShoppingCartItems>
                        <InfoProducts>
                            <div>
                                <h4>Produto 1</h4>
                                <p>Quantidade: 1x</p>
                                <h5>R$140,00</h5>
                            </div>
                        </InfoProducts>
                        <InfoProducts>
                            <div>
                                <h4>Produto 2</h4>
                                <p>Quantidade: 1x</p>
                                <h5>R$200,00</h5>
                            </div>
                        </InfoProducts>
                        
                        <DivTotal>
                            <p>TOTAL</p>
                            <p>R$ 340,00</p>
                        </DivTotal>  
                    </ShoppingCartItems>
                    <DivButtons>
                            <KeepShoppingButton>Continuar comprando</KeepShoppingButton>
                            <CheckoutButton>Finalizar compra</CheckoutButton>
                        </DivButtons>
                </DivShoppingCart>
            </div>
        )
    }
}

export default ShoppingCart;