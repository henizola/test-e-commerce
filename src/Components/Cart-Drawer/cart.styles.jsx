import styled from "styled-components";

export const CartProduct = styled.div`
  width: 100%;
  padding: 10px 70px;
  height: fit-content;

  .cartProductImage {
    width: 120px;
    height: 120px;

    border-radius: 10px;
  }
  .remove {
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid gray;
    padding: 5px 10px;
    float: right;
  }
  p {
    margin: 0;
    padding: 5px 0;
  }
  .quant {
    float: right;
    margin-top: 70px;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  max-width: calc(100% - 140px);
  padding-top: 60px;
`;

export const Footer = styled.div`
  padding: 10px 70px;
  float: bottom;
  .price {
    display: flex;
    justify-content: space-between;
  }
  .controls {
    width: 70%;
    float: right;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  button {
    margin: 20px 10px;
    width: 100%;
    background-color: #000;
    border: none;
    padding: 10px;
    border-radius: 20px;
    color: #fff;
  }
  .outline {
    background-color: #fff;
    border: 1px solid black;
    color: #000;
  }
`;
