import { BrowserRouter, Route, Switch } from "react-router-dom";
import Frutas from "./pages/frutas";
import Home from "./pages/home";
import Legumes from "./pages/legumes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hortfruti" component={Home} /> 
        <Route exact path="/frutas" component={Frutas} /> 
        <Route exact path="/legumes" component={Legumes} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
