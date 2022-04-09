import React, {Component,useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

import { HashRouter as Router, Route } from 'react-router-dom'
import DropDown from './components/dropdown';
import UsersList from './components/UsersList';

function App() {
 
  // const [dd, setdd] = useState();
  
  // useEffect(() => {
   
   
  //   fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
  //   .then(response=>response.json())
  //   .then(dd=>setdd({dd:dd}))
 
  // });
  return (
   <>
{/* <UsersList/> */}
   <Router>
   
   {/* <Read/> */}
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
   
        <Route exact path='/' component={Read} />
          <Route path='/create' component={Create} />
        
        {/* <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div> */}

          <Route  path='/read' component={Read} />
        
        <Route path='/update' component={Update} />
        <Route path='/dropdown' component={DropDown} />
      </div>
    </Router>
</>
  );
}

export default App;
