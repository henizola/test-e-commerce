import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import logo from "../../assets/shop.png";
import CartDrawer from "../Cart-Drawer/Cart-Drawer.component";
import { Container } from "./Navigation.styles";

import { BsBag } from "react-icons/bs";

import { useContext } from "react";

import { CartContext } from "../../Context/context";

export default function Navigation() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { cart, setCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const toggleDrawer = (anchor, open, permit) => (event) => {
    console.log(event, "event here");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (event.type === "click" && permit)
      setState({ ...state, [anchor]: open });
  };

  return (
    <Container>
      <img src={logo} alt="" className="logo" />
      <Box
        sx={{ width: "100%" }}
        style={{ backgroundColor: "rgb(245, 250, 255) !important" }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" />

          <Tab label="Products" />
          <Tab label="Contact" />
          <Tab label="About" />
        </Tabs>
      </Box>
      <Stack direction="row" spacing={3}>
        {cart.length > 0 && <span className="number">{cart.length}</span>}
        <Avatar
          alt="Shop"
          onClick={toggleDrawer("right", true, true)}
          style={{
            backgroundColor: "transparent",
            border: "1px solid gray",
            position: "relative",
          }}
        >
          <BsBag />
        </Avatar>
        <Avatar
          alt="Remy Sharp"
          src="https://lh3.googleusercontent.com/ogw/ADea4I7GPA3Dy0DuhB95scJRTzDdxVFNVb-o88ZwWC6vvg=s64-c-mo"
        />
      </Stack>
      <CartDrawer state={state} toggleDrawer={toggleDrawer} />
    </Container>
  );
}
