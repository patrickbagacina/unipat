import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { SignIn } from './components/sign-in/signin';
import { Register } from './components/register/register';
import { Universities } from './components/universities/universities';
import { Newsletters } from './components/newsletters/newsletters';
import { Favorites } from './components/favorites/favorites';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Home>
          <Route exact path="/" component={Universities} />
          <Route path="/universities" component={Universities} />
          <Route path="/newsletters" component={Newsletters} />
          <Route path="/favorites" component={Favorites} />
        </Home>
      </Switch>
    </Router>
  );
}

export default App;
