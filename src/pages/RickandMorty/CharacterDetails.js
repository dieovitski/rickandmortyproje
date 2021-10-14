import React from "react";
import {Link, useParams} from "react-router-dom";

function CharacterDetails({match}) {

  let {id} = useParams();

  return (<div className="container">
  <br/>
  <Link to="/characters">Geri</Link>
  </div>
  );
}

export default CharacterDetails;