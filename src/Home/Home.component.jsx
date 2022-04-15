import Electronics from "../Components/Electronics/electronics.component";
import Furnitures from "../Components/Furnitures/Furnitures.component";
import CenteredTabs from "../Components/Tabs/Tabs.component";
import { Container } from "./Home.styles";

import React, { useState } from "react";

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const [filterString, setFilterString] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <CenteredTabs
        value={value}
        handleChange={handleChange}
        setFilterString={setFilterString}
        filterString={filterString}
      />
      {value === 1 ? (
        <Electronics
          setFilterString={setFilterString}
          filterString={filterString}
        />
      ) : (
        <Furnitures
          setFilterString={setFilterString}
          filterString={filterString}
        />
      )}
    </Container>
  );
};

export default HomePage;
