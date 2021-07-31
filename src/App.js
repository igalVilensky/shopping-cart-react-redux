import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
