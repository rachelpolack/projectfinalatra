import React from 'react'

import {Provider} from 'react-redux'
import store from './components/Store/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routee from './components/Router/Route';

function App() {
  return (
    <div className="container">
    
    <Provider store={store}>
    <Router>
        <Routee></Routee>


  </Router>
  </Provider>
  </div>
     
  );
}

export default App;
