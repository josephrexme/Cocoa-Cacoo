import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Projects from './components/Projects';
import Details from './components/Details';
import GlobalStyle from './components/GlobalStyle';

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/projects" component={Projects} />
        <Route path="/details" component={Details} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
