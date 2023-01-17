import React from 'react';
import {Link} from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to TechyG Blog</h1>
            <p className="lead">Explore various kinds of intriguing blogs on a wide range of topics.</p>
            <hr className="my-4" />
            <p>Click the button below to get started.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">TechyG</Link>
        </div>
    </div>
);

export default home;