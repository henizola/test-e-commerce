import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { CartContext } from "../../Context/context";
import { products } from "../../Utils/datas.util";
import BpCheckbox from "../custom-checkbox/custom-checkbox.component";
import CustomizedRadios from "../custom-radio/custom-radio.component";
import { Container, Item } from "./electronics.styles";

import discounts from "../../assets/discount.png";

const Electronics = ({ filterString }) => {
  const { cart, setCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const addToCart = (product) => {
    if (cart.find((c) => c.name === product.name)) {
      let index = cart.findIndex((c) => c.name === product.name);
      let temp = cart;
      // temp.splice(1, index);

      setCart(temp, "here");
    } else setCart([...cart, product]);
  };
  return (
    <Container>
      <Grid container spacing={5} className="p-t-50">
        <Grid item xs={2.5} lg={2.5}>
          <p>Filter</p>

          <Divider />
          <ul>
            <li>
              <BpCheckbox lable={"Sofas"} />
              <span>Smart Phones</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Laptops</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Tv</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Headphones</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Speakers</span>
            </li>
            <li>
              <BpCheckbox />
              <span>Mouse</span>
            </li>{" "}
            <li>
              <BpCheckbox />
              <span>Keyboard</span>
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
        <Grid item xs={9.5} lg={9.5} style={{ marginTop: "30px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {products
                .filter((p) => p.catagorie === "elec")
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
                          onClick={() => addToCart(prod)}
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

              {/* <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button className="add">
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                  <button className="added">
                    Added <TiTick />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Item>
                  <img src={phone} alt="" />
                  <div className="desc">
                    <span>Iphone X</span>
                    <span>$ 1,200.00</span>
                  </div>
                  <button>
                    Add to Cart <ImArrowUpRight2 className="hover" />
                  </button>
                </Item>
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Electronics;
