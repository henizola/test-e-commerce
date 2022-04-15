import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/context";
import { CartProduct } from "./cart.styles";

const CartItem = ({ product, toggleDrawer }) => {
  const { cart, setCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const { increaseQuantity, decreaseQuantity } = React.useContext(CartContext);

  return (
    <CartProduct>
      <Divider style={{ marginBottom: "17px" }} />
      <Grid container spacing={5}>
        <Grid item xs={4} lg={4}>
          <img
            src={product.image}
            alt={product.name}
            className="cartProductImage"
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
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>

          <p>
            ${" "}
            {product.price.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </Grid>
        <Grid item xs={3} lg={3}>
          <button className="remove" onClick={() => removeFromCart(product)}>
            x
          </button>
          <div className="quant">
            <button
              className="remove"
              onClick={() => decreaseQuantity(product)}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              className="remove"
              onClick={() => increaseQuantity(product)}
            >
              +
            </button>
          </div>
        </Grid>
      </Grid>
    </CartProduct>
  );
};

export default CartItem;
