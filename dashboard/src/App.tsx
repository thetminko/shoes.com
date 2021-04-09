import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          {/* home page */}
        </Route>
        <Route path="/checkout" exact={true}>
          {/* After checkout page */}
        </Route>
        <Route path="/history" exact={true}>
          {/* Order history page */}
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
