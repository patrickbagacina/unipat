import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { SignIn } from './components/sign-in/signin';
import { Register } from './components/register/register';
import { PageNotFound } from './components/not-found/not-found';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route path="/universities" component={Home} />
        <Route path="/newsletters" component={Home} />
        <Route path="/favorites" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
