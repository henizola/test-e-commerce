import { Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { CartContext } from "../../Context/context";
import { products } from "../../Utils/datas.util";
import BpCheckbox from "../custom-checkbox/custom-checkbox.component";
import CustomizedRadios from "../custom-radio/custom-radio.component";
import { Container, Item } from "./checkout.styles";

import { useNavigate } from "react-router-dom";

import discounts from "../../assets/discount.png";

import logo from "../../assets/shop.png";
import CartItem from "../Cart-Drawer/CartProduct.component";
import { CartProduct } from "../Cart-Drawer/cart.styles";

import { IoChevronBack } from "react-icons/io5";
import CartItemDetail from "../Cart-Drawer/CartProductDetail.component copy";

import like from "../../assets/like.png";

const Summary = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { getTotalPrice, getTotalPriceTaxed } = useContext(CartContext);
  let navigate = useNavigate();

  return (
    <Container>
      <img src={logo} alt="" className="logo" />
      <Grid container spacing={15}>
        <Grid item xs={5} lg={5}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 5, md: 5 }}
              columnSpacing={{ xs: 2, sm: 5, md: 5 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={like} alt="like" className="like" />
              <h3 style={{ margin: "0" }}>
                Thank You For Shoping with Shoplly
              </h3>
              <p>your orders are on the way!</p>
              <button className="outline" onClick={() => navigate("/")}>
                Back To Shoping
              </button>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={7} lg={7}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 5, md: 5 }}
              columnSpacing={{ xs: 2, sm: 5, md: 5 }}
              className="card"
            >
              {" "}
              <h3
                style={{
                  color: "black!important",
                  margin: "50px 25px",
                  marginTop: "0",
                }}
              >
                Order Summary
              </h3>
              <div className="price">
                <div className="inside">
                  <h3>Oredr Number</h3>
                  <h4>543309134</h4>
                  <h3 style={{ marginTop: "0" }}>EST Delivery Date</h3>

                  <h4 style={{ marginTop: "0" }}>18 April , 2022</h4>
                  <h3 style={{ marginTop: "0" }}>Shipping Details</h3>

                  <h4 style={{ marginTop: "0" }}>
                    Paul Writer <br /> Africa ANV ST ,ADDIS ABABA
                    <br /> ETHIOPIA
                  </h4>
                </div>
                <Divider />
                <h4
                  style={{
                    marginLeft: "37%",
                    display: "flex",
                    marginRight: "35px",
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <span> Total</span> <span>{getTotalPriceTaxed()}</span>
                </h4>
              </div>
              {cart.map((prod, index) => (
                <Grid
                  item
                  xs={12}
                  lg={12}
                  key={index}
                  style={{ height: "150px", width: "70%!important" }}
                >
                  <CartItemDetail product={prod} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Summary;
