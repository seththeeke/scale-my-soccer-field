import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter.js';
import { BrowserRouter as Router } from "react-router-dom";
import github from "./img/github.png";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">          
        <Router>
          <AppRouter></AppRouter>
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/seththeeke/language-graph">
            <img className="icon" alt="github" src={github}></img>
          </a>
        </Router>
      </div>
    );
  }
  
}

export default App;