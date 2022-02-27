import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import Iphones from './components/Iphones'
import Macbooks from './components/Macbooks'
import Airpods from './components/Airpods'
import Layout from './components/Layout';

import {BrowserRouter as Router,Route} from 'react-router-dom'


import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <Router> 
        <div className="app">
          <Layout />
          <main>
            <Route  exact  path ="/Iphones" >
               <Iphones/>
            </Route>
            <Route  exact  path ="/Macbooks" >
            <Macbooks />
            </Route>
            <Route  exact  path ="/Airpods" >
              <Airpods />
            </Route>
        </main>
        </div>
        <Footer />
       </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


