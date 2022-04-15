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

const Checkout = () => {
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
              className="card contact"
            >
              <h5>Contact Information</h5>
              <TextField
                label="Email or Phone NUmber"
                id="outlined-size-small"
                defaultValue=""
                size="small"
              />
              <h5>Shipping Address</h5>
              <div className="tow-by-two">
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </div>
              <TextField
                label="Last Name"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                style={{ marginTop: "15px" }}
              />{" "}
              <TextField
                label="Last Name"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                style={{ marginTop: "15px" }}
              />{" "}
              <TextField
                label="Last Name"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                style={{ marginTop: "15px" }}
              />
              <div className="tow-by-two" style={{ marginTop: "15px" }}>
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
                <div
                  style={{ display: "grid", gridTemplateColumns: "40px 1fr" }}
                >
                  <BpCheckbox /> <p>save this information for next time</p>
                </div>
              </div>
            </Grid>
            <div
              className="price"
              style={{
                marginTop: "40px",
                display: "flex",
                marginLeft: "0",
                paddingLeft: "0",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "330px",
              }}
            >
              <h5
                style={{
                  marginLeft: "-50px",
                  paddingTop: "0px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                {" "}
                <IoChevronBack />
                RETURN TO CART{" "}
              </h5>
              <button className="added" onClick={() => navigate("/summary")}>
                Compolete Order
              </button>
            </div>
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
              {cart.map((prod, index) => (
                <Grid
                  item
                  xs={12}
                  lg={12}
                  key={index}
                  style={{ height: "150px", width: "70%!important" }}
                >
                  <CartItem product={prod} />
                </Grid>
              ))}
              <div className="price">
                <div className="inside">
                  <h3>Price</h3>
                  <h4>$ {getTotalPrice()}</h4>
                  <h3 style={{ marginTop: "0" }}>Shipping</h3>
                  <h4 style={{ marginTop: "0" }}>$ {50}</h4>
                </div>

                <Divider />
                <div className="inside">
                  <h3 style={{ marginTop: "15px" }}>Total</h3>
                  <h4 style={{ marginTop: "15px" }}>
                    $ {getTotalPriceTaxed()}
                  </h4>
                </div>
              </div>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
