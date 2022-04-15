import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/context";
import { CartProduct } from "./cart.styles";

const CartItemDetail = ({ product, toggleDrawer }) => {
  const { removeFromCart } = useContext(CartContext);

  const { increaseQuantity, decreaseQuantity } = React.useContext(CartContext);

  return (
    <CartProduct>
      <Grid container spacing={5}>
        <Grid item xs={4} lg={4} style={{ position: "relative" }}>
          <p className="quantityy">{product.quantity}</p>
          <img
            src={product.image}
            alt={product.name}
            className="cartProductImage "
            style={{ position: "relative!important" }}
            onClick={() => toggleDrawer("right", true)}
          />
        </Grid>
        <Grid
          item
          xs={5}
          lg={5}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        </Grid>
        <Grid item xs={3} lg={3}>
          <div className="quant">
            <p>
              ${" "}
              {product.price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "10px" }} />
    </CartProduct>
  );
};

export default CartItemDetail;
