import { BrowserRouter, Route, Switch } from "react-router-dom";
import Frutas from "./pages/frutas";
import Home from "./pages/home";
import Legumes from "./pages/legumes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hortfruti" component={Home} /> 
        <Route path="/frutas" component={Frutas} /> 
        <Route path="/legumes" component={Legumes} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
