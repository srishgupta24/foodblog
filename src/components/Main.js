import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Recipes } from './Recipes';
import { HealthTips } from './HealthTips';

export class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('made it inside Main')
    return(
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/healthyTips' component={HealthTips} />
        </Switch>
      </Router>
    )
  }
}
