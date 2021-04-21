import React from 'react';
import Navigation from './navigation/Navigation';
import Landing from './landing/Landing';
import './style.scss';

function Portfolio() {
    return (
        <div>
            <Navigation />
            <div className="page-content">
                <Landing />
            </div>
        </div>
    )
}

export default Portfolio
