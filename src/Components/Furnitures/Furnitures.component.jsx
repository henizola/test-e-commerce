import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ImArrowUpRight2 } from "react-icons/im";
import BpCheckbox from "../../Components/custom-checkbox/custom-checkbox.component";
import CustomizedRadios from "../../Components/custom-radio/custom-radio.component";
import { products } from "../../Utils/datas.util";
import { Container, Item } from "./Furnitures.styles";

import { useContext } from "react";

import { CartContext } from "../../Context/context";
import { TiTick } from "react-icons/ti";

import discounts from "../../assets/discount.png";

const Furnitures = ({ filterString }) => {
  const { cart, setCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const addToCart = (product) => {
    if (cart.find((c) => c.name === product.name)) {
      let index = cart.findIndex((c) => c.name === product.name);
      let temp = cart;
      // temp.splice(1, index);

      setCart(temp);
    } else setCart([...cart, product]);
  };

  return (
    <Container>
      <Grid container spacing={5} className="p-t-50">
        <Grid item xs={2} lg={2.5}>
          <p>Filter</p>

          <Divider />
          <ul>
            <li>
              <BpCheckbox lable={"Sofas"} />
              <span>Sofas</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Beds</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Tables</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Tv Stands</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Wardrobes</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Cabinates</span>
            </li>{" "}
            <li>
              <BpCheckbox />
              <span>Dressers</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Other</span>
            </li>
          </ul>
          <p>Sort</p>
          <Divider />
          <ul>
            <li>
              <CustomizedRadios lable="Discount" />
            </li>
            <li>
              <CustomizedRadios lable="Best Selling" />
            </li>{" "}
            <li>
              <CustomizedRadios lable="Price ASC" />
            </li>{" "}
            <li>
              <CustomizedRadios lable="Price DSC" />
            </li>{" "}
          </ul>
        </Grid>
        <Grid item xs={9} lg={9.5} style={{ marginTop: "30px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {products
                .filter((p) => p.catagorie === "fur")
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterString.toLowerCase())
                )
                .map((prod) => (
                  <Grid item xs={3} lg={3}>
                    <Item>
                      <img src={prod.image} alt="" />
                      {prod.discount && (
                        <img src={discounts} alt="" className="discount" />
                      )}
                      <div className="desc">
                        <span>{prod.name}</span>
                        <span>
                          {prod.price.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      {cart.find((p) => p.name === prod.name) ? (
                        <button
                          onClick={() => removeFromCart(prod)}
                          className="added"
                        >
                          Added <TiTick />
                        </button>
                      ) : (
                        <button onClick={() => addToCart(prod)}>
                          Add To Cart <ImArrowUpRight2 className="hover" />
                        </button>
                      )}
                    </Item>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Furnitures;
