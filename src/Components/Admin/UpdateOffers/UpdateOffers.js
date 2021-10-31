import React from 'react';
import './UpdateOffers.css';
import { useParams } from 'react-router';

const UpdateOffers = () => {
    const{id}=useParams();
    return (
        <div>
            id: {id}
        </div>
    );
};

export default UpdateOffers;