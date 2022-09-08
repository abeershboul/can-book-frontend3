import React from 'react';
import Header from './Header';
import BestBooks from './ BestBook';
//import BookFormModal from './BookFormModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Wellcom from './Wellcome';

import Profile from './Profile';

class App extends React.Component {
  render() {
    const {isAuthenticated}=this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated ? <BestBooks />:<Wellcom/>}
            >
             </Route>
             <Route 
              exact path="/Profile"
              element={isAuthenticated && <Profile />}
            >
             </Route>

            
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          
        </Router>
      </>
    )
  }
}

export default withAuth0(App);