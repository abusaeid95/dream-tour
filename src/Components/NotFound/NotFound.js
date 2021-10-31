import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link to="/"><button  className="nfnd text-white bg-primary ">GO TO HOME</button></Link>
            <img src="https://i.ibb.co/wJSgLNr/404-error-template-10.png" alt="" />
        </div>
    );
};

export default NotFound;