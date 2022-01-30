import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/shared/Card';

const NotFound = () => {

    return (
        <Card >
            <h1 style={{TextAlign:"Center"}} >Opss !</h1>
            <h3 >NotFound</h3>
            <Link to="/"> back Home</Link>
        </Card>


           );
};

export default NotFound;