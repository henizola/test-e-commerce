import Navigation from "./Components/Navigation/Navigation.component";
import { CartProvider } from "./Context/context";

import HomePage from "./Home/Home.component";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navigation />
        <HomePage />
      </CartProvider>
    </div>
  );
}

export default App;
