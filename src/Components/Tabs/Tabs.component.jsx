import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

import InputBase from "@mui/material/InputBase";
import { Container } from "./Tabs.styles";

import { useContext, useEffect } from "react";

import { CartContext } from "../../Context/context";

export default function CenteredTabs({
  value,
  handleChange,
  setFilterString,
  filterString,
}) {
  const { filterProducts, productList } = useContext(CartContext);

  const [searchString, setSearchString] = React.useState("");

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: " 10px auto",
    border: "1px solid gray",

    width: "25vw",

    [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(1),
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleFilter = (e) => {
    e.preventDefault();
    setFilterString(e.target.value);
  };

  useEffect(() => {
    // Update the document title using the browser API
    setFilterString("");
  }, [value]);

  return (
    <Container>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          onChange={handleFilter}
          value={filterString}
          key={123}
          autoFocus="autoFocus"
        />
      </Search>
      <Box
        sx={{ width: "100%" }}
        style={{ backgroundColor: "rgb(245, 250, 255) !important" }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Furnitures" />
          <Tab label="Electronics" />
          <Tab label="Vehicles" disabled />
          <Tab label="Accessories" disabled />
          <Tab label="Fasion" disabled />
        </Tabs>
      </Box>
    </Container>
  );
}
