import styled from "styled-components";

export const CartProduct = styled.div`
  max-width: 100%;
  padding: 10px 40px;
  height: fit-content;
  position: relative;
  .cartProductImage {
    width: 100px;
    height: 100px;
    position: relative;

    border-radius: 10px;
  }
  .remove {
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid gray;
    padding: 5px 10px;
    float: right;
  }

  .quantityy {
    position: absolute;
    top: 30px;
    right: 30%;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 20px;
    padding: 3px 3px;
    z-index: 999999999;
    background: linear-gradient(
      153deg,
      rgba(0, 255, 246, 1) 0%,
      rgba(111, 9, 121, 1) 100%
    );
  }

  p {
    margin: 0;
    padding: 5px 0;
  }
  .quant {
    float: right;
    margin-top: 50px;
    margin-left: 10%;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  padding-top: 60px;
`;

export const Footer = styled.div`
  padding: 10px 40px;
  float: bottom;
  .price {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
