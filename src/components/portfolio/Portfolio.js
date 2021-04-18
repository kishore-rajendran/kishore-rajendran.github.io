import React from 'react';
import Navigation from './navigation/Navigation';
import './Portfolio.module.scss';

function Portfolio() {
    return (
        <div>
            <Navigation />
            <div id="content">
                <div style={{ height: "200vh", marginTop: "100px" }}>
                    <span style={{ fontSize: "5rem" }}>hello</span>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
