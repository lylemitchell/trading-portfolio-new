import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, {}  from 'react';


import Navbar from './components/navbar.component';
import TokenList from './components/token-list.component';
import EditToken from './components/edit-token.component'
import CreateToken from './components/create-token.component';


function App() {
  return (
   <Router>
     <Navbar/>
     <br/>
     <Route path="/" exact component={TokenList} />
     <Route path="/edit/:id" component={EditToken} />
     <Route path="/create" component={CreateToken} />
   </Router>
  );
}

export default App;
