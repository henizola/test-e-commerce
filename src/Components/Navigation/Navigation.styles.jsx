import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: fit-content;
  background-color: rgb(240, 240, 240) !important;
  padding: 10px 0;
  border-left: none;
  border-right: none;
  display: grid;
  grid-template-columns: 130px 1fr 120px;
  padding-left: 0px;
  padding-right: 0px;

  svg {
    fill: gray !important;
  }

  .logo {
    width: 120px;
  }

  .number {
    background: rgb(0, 255, 246);
    background: linear-gradient(
      153deg,
      rgba(0, 255, 246, 1) 0%,
      rgba(111, 9, 121, 1) 100%
    );
    width: 20px !important;
    height: 15px;
    border-radius: 30px;
    position: absolute;
    font-size: 12px;
    text-align: center;
    padding: 3px 0;
    right: 80px;
    top: 3px;
    z-index: 999;
  }
`;

export const SearchContainer = styled.div`
  width: 40vw;
  position: "relative";
`;
