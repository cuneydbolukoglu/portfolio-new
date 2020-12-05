import React from 'react';
import './style/style.css'
import './style/App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuData from './data/MenuData';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {
          MenuData.map((item, index) => <Route key={index} exact path={item.url} component={item.page} />)
        }
      </Switch>
      <Home />
      <Footer />
    </Router>
  )
}

export default App;