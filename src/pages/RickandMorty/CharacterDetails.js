import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CHARACTERS_API } from '../../api/rickandmorty';
import Loading from '../../components/Loading';

function CharacterDetails({ match }) {

    let { id } = match.params;
    let [charDetails, setCharDetails] = useState(null);

    useEffect(() => {
        try {
            fetch(`${CHARACTERS_API}/${id}`)
                .then(res => res.json())
                .then(res => setCharDetails(res))
                .catch(err => console.log(err))
        } catch (e) {
            console.log(e)
        }
    }, [id])

    if (!charDetails) {
        return <Loading />
    }

  let {name, image, species, status, origin, location, episode, gender} = charDetails;

  return (<div className="container">
  <br/>
  <Link to="/characters">Geri</Link>
  <h2>Karakter detaylari</h2>
  <hr/>
  <div className="charDetails">
    <div>
      <img src={image} alt={image}/>
      </div>
      <div>
        <ul className="collection">
           <li className="collection-item"><strong>Memleketi:</strong> {origin.name}</li>
           <li className="collection-item"><strong>Yeri:</strong> {location.name}</li>
           <li className="collection-item"><strong>Turu:</strong> {species}</li>
           <li className="collection-item"><strong>Cinsiyet:</strong> {gender}</li>
           <li className="collection-item"><strong>Durumu:</strong> {status}</li>
           <li className="collection-item"><strong>Goruldugu bolumler:</strong> {episode}</li>
        </ul>
      </div>
  </div>
</div>
  );
}

export default CharacterDetails;