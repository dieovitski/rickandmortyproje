import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

function Location({ location }) {

    let { name, dimension, residents, type, id } = location;
    let history = useHistory();
    let { url } = useRouteMatch();

    return (
        <div className="card black location" onClick={() => history.push(`${url}/${id}`)}>
            <div className="card-content">
                <h4 className="green-text">{name}</h4>
                <br/>
                <ul className="collection">
                    <li className="collection-item"><strong>Boyut: </strong>{dimension}</li>
                    <li className="collection-item"><strong>Tip: </strong>{type}</li>
                    <li className="collection-item"><strong>Kalanlar: </strong>{residents.length}</li>
                </ul>
            </div>
        </div>
    );
}

export default Location;