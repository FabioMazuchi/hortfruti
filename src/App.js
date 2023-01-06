import { BrowserRouter, Route, Switch } from "react-router-dom";
import Provider from "./context/provider";
import Frutas from "./pages/frutas";
import Home from "./pages/home";
import Legumes from "./pages/legumes";
import Preços from "./pages/preços";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/hortfruti" component={Home} /> 
          <Route path="/frutas" component={Frutas} /> 
          <Route path="/legumes" component={Legumes} /> 
          <Route path="/preços" component={Preços} /> 
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
