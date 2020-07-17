import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';

import Main from '../Main/Main'
import {user} from '../../../constants/Config'
function UserRoute() {
  
  return (

    <Route render={props => (
      user ?
      <div>
      <Route path="/">
        <Main/>
      </Route>
     
    </div>
      : <p>welcome welcom! hihi</p>
  )} />
    
  );
}
function nana() {
  return <h2>Na nè</h2>;
}
export default UserRoute;

