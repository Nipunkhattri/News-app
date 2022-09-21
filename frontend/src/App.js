import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Search from './components/Search';

// let  p = document.getElementById("searchbtn");
// let url =`https://newsapi.org/v2/top-headlines?&q=${p.innerhtml}&country=in&apiKey=f9b0a36ddc15450998dd5f25f5b5aebc&pageSize=10`

const App =()=>{

  const apikey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/"><News key="general"  apikey={apikey} pageSize={8} category="general"/></Route>
            <Route exact path="/Business"><News key="Business" apikey={apikey}  pageSize={8} category="Business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment"  apikey={apikey} pageSize={8} category="entertainment"/></Route>
            <Route exact path="/general"><News key="general" apikey={apikey}  pageSize={8} category="general"/></Route>
            <Route exact path="/health"><News key="health" apikey={apikey}  pageSize={8} category="health"/></Route>
            <Route exact path="/science"><News key="science"  apikey={apikey} pageSize={8} category="science"/></Route>
            <Route exact path="/sports"><News key="sports" apikey={apikey}  pageSize={8} category="sports"/></Route>
            <Route exact path="/technology"><News key="technology" apikey={apikey}  pageSize={8} category="technology"/></Route>
            {/* <Route exact path="/search"><Search pageSize={8}/></Route> */}
          </Switch>
        </Router>
      </div>
    )
  }

  export default App