import React from "react";
import './styles/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Characters from "./pages/RickandMorty/Characters";
import CharacterDetails from "./pages/RickandMorty/CharacterDetails";
import Locations from "./pages/RickandMorty/Locations";

function App() {
  return (
   <Router>
     <Navigation/>
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/characters" exact component={Characters} />
     <Route path="/locations" exact component={Locations} />
     <Route path="/characters/:id" exact component={CharacterDetails} />
     </Switch>
   </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Rick and Morty</h2>
      <div className="poster">
      <img alt="rickandmorty" 
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2017%2F08%2FMorty-and-Rick-Adult-Swim.jpg&f=1&nofb=1" />
     </div>
    </div>
  );
} 


export default App;
