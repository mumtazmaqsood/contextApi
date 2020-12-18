
import React, { useState } from 'react';
import Child from './Child';


function Parent() {
    
    return(
        <div>
            <h2>Parent Componen </h2>
            <Child />
        </div>
    );
}

export default Parent;