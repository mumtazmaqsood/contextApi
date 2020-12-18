

import React, { useContext } from 'react';
import countContext from './ValueContext';

function Child() {
    let value = useContext(countContext);
    return(
        <div>
            <h3>Child Component {value}</h3>
        </div>
    );
}

export default Child;