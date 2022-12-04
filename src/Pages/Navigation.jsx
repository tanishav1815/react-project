import React from 'react';
import {useParams} from 'react-router-dom';
const Navigation = () => {
    const {id}=useParams();
    return (
        <div>
            <h1> player page 🔥 {id} </h1> 
            <div>Nature</div>

    <hr />
    
    
        </div>
    );
}

export default Navigation;