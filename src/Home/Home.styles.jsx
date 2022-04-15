import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  .p-t-50 {
    padding: 20px 0;
  }
  ul {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    li {
      margin-top: 5px;
    }
    span {
      margin: 0;
    }
  }
`;
