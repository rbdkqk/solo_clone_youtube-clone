import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideo from './RecommendedVideo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    // 클래스이름을 정할 때, BEM class naming convention 을 따른다(?)
    <div className="app">
      
      <Router>
        <Header />

        <Switch>      

          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
                      
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
