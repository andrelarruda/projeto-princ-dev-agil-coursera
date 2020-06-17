import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Ranking from "./pages/Ranking";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/books" exact component={Books} />
        <Route path="/book/detail/:id" exact component={BookDetail} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/profile/:id" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
