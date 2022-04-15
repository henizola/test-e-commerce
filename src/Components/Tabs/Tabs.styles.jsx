import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100px;
  border: 1px solid #bebbbbb6;
  padding: 20px 0;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  svg {
    fill: gray !important;
  }
  background-color: rgb(240, 240, 240) !important;
`;

export const SearchContainer = styled.div`
  width: 40vw;
  position: "relative";
`;
