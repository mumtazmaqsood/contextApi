

import React, { useContext } from 'react';
import countContext from './ValueContext';

function Child() {
    let value = useContext(countContext);
    return(
        <div>
            <h3>Child Component {value}</h3>
            <button onClick= { ()=> {value[1](++value[0])}}> Increament </button>
            <button onClick= { ()=> {value[1](--value[0])}}> Decrement </button>
        </div>
    );
}

export default Child;