import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Auth from "./Components/Auth/Auth"
import AuthState from "./Context/Auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />


        </Switch>

      </BrowserRouter>
    </AuthState>
  );
}

export default App;
