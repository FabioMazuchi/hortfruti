import { BrowserRouter, Route, Switch } from "react-router-dom";
import Provider from "./context/provider";
import Etiquetas from "./pages/etiquetas";
import Frutas from "./pages/frutas";
import Home from "./pages/home";
import Legumes from "./pages/legumes";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/hortfruti" component={Home} /> 
          <Route path="/frutas" component={Frutas} /> 
          <Route path="/legumes" component={Legumes} /> 
          <Route path="/etiquetas" component={Etiquetas} /> 
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
