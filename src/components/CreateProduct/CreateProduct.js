import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  CreateContainer,
  TitleContainer,
  Title,
  ItensContainer,
  ItemContainer,
  Label,
  Input,
  Select,
  Option,
  Button
} from './styles';

/*Variáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products';

export default class CreateProduct extends Component {
  state = {
    inputName: "",
    inputDescription: "",
    inputPrice: "",
    inputPaymentMethod: "",
    inputCategory: "",
    inputPhotos: [],
    inputInstallments: ""
  }

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value })
  }
  onChangeDescription = (e) => {
    this.setState({ inputDescription: e.target.value })
  }
  onChangePrice = (e) => {
    this.setState({ inputPrice: Number(e.target.value) })
  }
  onChangePaymentMethod = (e) => {
    this.setState({ inputPaymentMethod: e.target.value })
  }
  onChangeCategory = (e) => {
    this.setState({ inputCategory: e.target.value })
  }
  onChangePhotos = (e) => {
    const array = [e.target.value]
    this.setState({ inputPhotos: array })
  }
  onChangeInstallments = (e) => {
    this.setState({ inputInstallments: Number(e.target.value) })
  }

  createProduct = async () => {
    const body = {
      name: String(this.state.inputName),
      description: String(this.state.inputDescription),
      price: this.state.inputPrice,
      paymentMethod: String(this.state.inputPaymentMethod),
      category: String(this.state.inputCategory),
      photos: this.state.inputPhotos,
      installments: this.state.inputInstallments
    }

    try {
      await axios.post(baseUrl, body)
      alert("Produto cadastrado com sucesso!")

      this.setState({
        inputName: "",
        inputDescription: "",
        inputPrice: "",
        inputPaymentMethod: "",
        inputCategory: "",
        inputPhotos: [],
        inputInstallments: ""
      })

    } catch (error) {
      if (error.message.includes('400')) {
        alert("Preencha todos os campos corretamente!")
      }
      console.log(error.message)
    }
  }

  render() {
    return (
      <CreateContainer>
        <TitleContainer>
          <Title>CADASTRAR PRODUTO:</Title>
        </TitleContainer>

        <ItensContainer>
          <ItemContainer>
            <Label>Nome</Label>
            <Input type={'text'} value={this.state.inputName} onChange={this.onChangeName} />
          </ItemContainer>

          <ItemContainer>
            <Label>Descrição</Label>
            <Input type={'text'} value={this.state.inputDescription} onChange={this.onChangeDescription} />
          </ItemContainer>

          <ItemContainer>
            <Label>Imagem</Label>
            <Input type={'text'} placeholder={'http://'} value={this.state.inputPhotos} onChange={this.onChangePhotos} />
          </ItemContainer>

          <ItemContainer>
            <Label>Preço</Label>
            <Input type={'number'} min={0} value={this.state.inputPrice} onChange={this.onChangePrice} />
          </ItemContainer>

          <ItemContainer>
            <Label>Parcelas</Label>
            <Input type={'number'} min={1} max={12} value={this.state.inputInstallments} onChange={this.onChangeInstallments} />
          </ItemContainer>

          <ItemContainer>
            <Label>Categoria</Label>
            <Select onChange={this.onChangeCategory}>
              <Option hidden value={''}>Selecione</Option>
              <Option value={'audio'}>Áudio</Option>
              <Option value={'instruments'}>Instrumentos músicais</Option>
              <Option value={'sound-system'}>Sistema de som</Option>
              <Option value={'collectible'}>Colecionáveis</Option>
              <Option value={'media'}>Meios de comunicação</Option>
              <Option value={'clothing'}>Vestuário</Option>
              <Option value={'decorantion'}>Decoração</Option>
            </Select>
          </ItemContainer>

          <ItemContainer>
            <Label>Pagamento</Label>
            <Select onChange={this.onChangePaymentMethod}>
              <Option hidden value={''}>Selecione</Option>
              <Option value={'card'}>Cartão</Option>
              <Option value={'billet'}>Boleto</Option>
            </Select>
          </ItemContainer>

          <Button onClick={this.createProduct}>Cadastrar</Button>
        </ItensContainer>
      </CreateContainer>
    )
  }
}