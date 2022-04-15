import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { styled as newStyled } from "@mui/material/styles";

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;

  .logo {
    width: 150px;
    height: auto;
    margin: 0px 0px;
    margin-bottom: 100px;
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
  img {
    max-width: 100%;
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 5px;
    object-fit: cover;
  }

  .card {
    background-color: #fff;
    border-radius: 20px;

    padding: 0 !important;
    padding-top: 30px !important;
  }
  .contact {
    padding: 0 30px !important;
  }
  .MuiTextField-root {
    width: 100% !important ;
  }
  .css-hxvg31-MuiGrid-root > .MuiGrid-item {
    padding: 0 !important;
  }

  .tow-by-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  .price {
    width: 92%;
    margin: 20px auto;
    color: gray;
    margin-top: -30px;

    button {
      border-radius: 20px;
      padding: 5px 35px;
      background-color: #000;
      color: #fff;
      border: none;
      max-height: 40px;
    }
    .inside {
      display: grid;

      grid-template-columns: 1fr 1fr;
      h4 {
        text-align: left;
      }
    }
  }
  .contact {
    padding-bottom: 30px !important;
  }
  .like {
    width: 100px;
    height: 100px;
    margin: 50px 0;
    margin-bottom: 20px !important;
  }
  .outline {
    margin: 20px 10px;
    width: 50%;
    background-color: #000;
    border: none;
    padding: 10px;
    border-radius: 20px;
    color: #fff;
    background-color: transparent;
    border: 1px solid black;
    color: #000;
  }
`;

export const Item = newStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "grid",
}));
