import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ImArrowUpRight2 } from "react-icons/im";
import BpCheckbox from "../../Components/custom-checkbox/custom-checkbox.component";
import CustomizedRadios from "../../Components/custom-radio/custom-radio.component";
import { products } from "../../Utils/datas.util";
import { Container, Item } from "./Furnitures.styles";

import { useContext ,useState} from "react";

import { CartContext } from "../../Context/context";
import { TiTick } from "react-icons/ti";

import discounts from "../../assets/discount.png";

const Furnitures = ({ filterString }) => {
  const { cart, setCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const [sorts,setSort]=useState('')

  const addToCart = (product) => {
setCart([...cart, product]);
  };

const [filters,setFilters]=useState([])

  const handdleFilter=(e)=>{
  
    if(filters.find(fill=>fill===e.target.name)){
      let temp = [...filters];
      let index = filters.findIndex((p)=>p===e.target.name)
      temp.splice(index,1);
      console.log(temp)
      setFilters([...temp])
      console.log('im clled')
    }
    else
    setFilters([...filters,e.target.name])

  }


function compare( a, b ) {
if(sorts==='asc'){
  if ( a.price < b.price){
    return -1;
  }
  if ( a.price > b.price){
    return 1;
  }
  return 0;
  
}
else if(sorts==='dsc'){
  if ( a.price > b.price){
    return -1;
  }
  if ( a.price < b.price){
    return 1;
  }
  return 0;
  
}

else if(sorts==='seller'){
  if ( a.bestSelling){
    return -1;
  }
  if ( !a.bestSelling){
    return 1;
  }
  return 0;
  
}
else if(sorts==='discount'){
  if ( a.discount){
    return -1;
  }
  if ( !a.discount){
    return 1;
  }
  return 0;
  
}

 
}




  return (
    <Container>
      <Grid container spacing={5} className="p-t-50">
        <Grid item xs={2} lg={2.5}>
          <p>Filter</p>

          <Divider />
          <ul>
            <li>
              <BpCheckbox lable={"Sofas"} name='sofa' onChange={handdleFilter} />
              <span>Sofas</span>
            </li>
            <li>
              <BpCheckbox name='bed' onChange={handdleFilter} />
              <span>Beds</span>
            </li>
            <li>
              <BpCheckbox name='table' onChange={handdleFilter}  />
              <span>Tables</span>
            </li>
            <li>
              <BpCheckbox  name='stand' onChange={handdleFilter} />
              <span>Tv Stands</span>
            </li>
            <li>
              <BpCheckbox name='wardrobe' onChange={handdleFilter} />
              <span>Wardrobes</span>
            </li>
            <li>
              <BpCheckbox name='cabinate' onChange={handdleFilter} />
              <span>Cabinates</span>
            </li>{" "}
            <li>
              <BpCheckbox name='dresser' onChange={handdleFilter} />
              <span>Dressers</span>
            </li>
            <li>
              <BpCheckbox name='other' onChange={handdleFilter} />
              <span>Other</span>
            </li>
          </ul>
          <p>Sort</p>
          <Divider />
          <form>

          <ul>
            <li> 
              <CustomizedRadios setSort={setSort}  />
            </li>
          
          </ul>
          </form>
        </Grid>
        <Grid item xs={9} lg={9.5} style={{ marginTop: "30px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {filters.length>0&& products
                .filter((p) => p.catagorie === "fur")
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterString.toLowerCase())
                ).filter(item => filters.includes(item.type)).sort( compare )
                .map((prod, index) => (
                  <Grid item xs={3} lg={3} key={index}>
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
                   {filters.length===0&& products
                .filter((p) => p.catagorie === "fur")
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(filterString.toLowerCase())
                ).sort( compare )
                .map((prod, index) => (
                  <Grid item xs={3} lg={3} key={index}>
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
