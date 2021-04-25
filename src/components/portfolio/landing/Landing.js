import React from 'react';
import './style.scss';

function Landing() {
    return (
        <div className="c-landing-section">
            <div className="c-landing-section__intro">
                Hi, my name is,
            </div>
            <h2 className="c-landing-section__name">
                Kishore Rajendran.
            </h2>
            <h3 className="c-landing-section__role">
                Software Development Engineer.
            </h3>
            <a href='/resume.pdf' className="o-btn o-btn--green o-btn--large c-landing-section__btn">
                Resume
            </a>
        </div>
    )
}

export default Landing;
