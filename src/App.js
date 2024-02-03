import React from "react";
import Home from "./pages/home";
import GlobalStyles from "./components/globalstyles";
import {Routes,Route} from "react-router-dom"
import GameDetail from "./components/gamedetail";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
  <GlobalStyles/>
  <Nav/>
  <Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/game/:id?" element={<GameDetail/>}/>
   </Routes>
    </div>
  );
}

export default App;
