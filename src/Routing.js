import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import './styles/responsive.scss';
import HomeMain from './home/HomeMain';
import Portfolio from './portfolio/Portfolio';
import Setup from './setup/Setup';
import About from './about-me/About';
import Faqs from './faqs/Faqs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/setup" component={Setup} />
        <Route path="/about-me" component={About} />
        <Route path="/FAQs" component={Faqs} />
      </Switch>
    </Router>
  );
}

export default Routing;