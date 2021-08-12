import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Dev from "./Components/Dev";
import Favorite from "./Components/Favorite";
import Links from "./Components/Links";
import Contents from "./Components/Contents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Links />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/dev" component={Dev} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/" component={Contents} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
