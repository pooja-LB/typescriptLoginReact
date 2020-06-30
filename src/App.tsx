import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import {LoginForm} from './pages/LoginForm';
import {SignupForm} from './pages/SignupForm';
import Home from './layout/home'

import PersonalDetails from './pages/personalDetails/personalDetails'
import AddArticle from './pages/article/addArticle'
import ListArticle from './pages/article/listArticle'
import ViewArticle from './pages/article/viewArticle'

function App() {
  return (
    <div className="container pt-4">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/home" component={Home} />
          </Switch>
        
          <Switch>
              <Route exact path="/home/personal-details" component={PersonalDetails} />
              <Route path="/home/add-article" component={AddArticle} />
              <Route path="/home/list-article" component={ListArticle} />
              <Route path="/home/view-article:id" component={ViewArticle} />
          </Switch>
              
        </BrowserRouter>
    </div>
  );
}

export default App;
