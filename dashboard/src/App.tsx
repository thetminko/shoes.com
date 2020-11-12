import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
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
}

export default App;
