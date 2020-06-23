import Counter from "./pages/counter"
import Quote from "./pages/quotePage"
import React from "react";
import MainLayout from "./layout/MainLayout"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/quote_kanya_west">
          <Quote />
        </Route>
        <Route path="/">
          <MainLayout>
            <h1>Home default Page</h1>
          </MainLayout>          
        </Route>
      </Switch>
    </Router>
  );
}