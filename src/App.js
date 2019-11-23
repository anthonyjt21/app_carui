import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Navbar from  './components/Navbar';
import Post from './components/Posts';
import Contact from './components/Contact';
//import ListUserComponent from "./user/ListUserComponent";
function App() {
  return (
   <div>
      <Router >
      <Switch>
        <Route path="/" component={Contact} />
        <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router>
     <AppBar color="primary" position="static">
       <Toolbar>
         <Typography variant="title"
          color="inherit">
       <Navbar></Navbar>
       </Typography>
       </Toolbar>
     </AppBar>
   </div>
  );
}

export default App;
