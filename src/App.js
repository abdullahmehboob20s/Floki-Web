import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import NFTPortal from "pages/NFTPortal/NFTPortal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nft-portal" component={NFTPortal} />
      </Switch>
    </Router>
  );
}

export default App;
