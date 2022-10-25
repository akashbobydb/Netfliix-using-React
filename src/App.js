import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RawPoster from "./Components/RawPoster/RawPoster";
import {orginals,actions,drama} from './url'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPoster url={orginals} title='Netflix Orginals'/>
      <RawPoster url={actions} title="Action" isSmall/>
      <RawPoster url={drama} title='Comedy'/>

    </div>
  );
}

export default App;
