import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
`;

const FilterInput = styled.input`
  max-width: 90%;
  max-height: 16px;
  padding: 10px;
  border: 2px solid #43ada5;
  font-weight: bold;
  background-color: #fff;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    font-size: 18px;
    font-weight: bold;
  }
`;

const FilterSelect = styled.select`
  max-width: 100%;
  padding: 10px;
  border: 2px solid #43ada5;
  font-weight: bold;
  background-color: #fff;
  border-radius: 5px;
`;

const FilterOptions = styled.option`
  font-weight: bold;
`;

class StoreFilter extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchValue: "",
    selectValue: "",
  };

  onChangeMin = (event) => {
    this.setState({ minValue: event.target.value });
  };
  onChangeMax = (event) => {
    this.setState({ maxValue: event.target.value });
  };

  onChangeMax = (event) => {
    this.setState({ maxValue: event.target.value });
  };

  onChangeSearch = (event) => {
    this.setState({ searchValue: event.target.velue });
  };

  render() {
    return (
      <FilterContainer>
        <FilterInput
          type="number"
          placeholder="Valor mínimo"
          min="0"
          onChange={this.onChangeMin}
        />

        <FilterInput
          type="number"
          placeholder="Valor máximo"
          min="0"
          onChange={this.onChangeMax}
        />

        <FilterSelect onChange={this.onChangeSelect}>
          <FilterOptions value="" hidden="" selected>
            Selecione
          </FilterOptions>
          <FilterOptions>Nome</FilterOptions>
          <FilterOptions>Preço</FilterOptions>
          <FilterOptions>Categoria</FilterOptions>
        </FilterSelect>
      </FilterContainer>
    );
  }
}

export default StoreFilter;
