import React from 'react';
import './style.scss';
import profile from '../../../assets/img/profile.png';

function About () {
    return (
        <div className="about-section">
            <div className="about-section__content">
                <p>
                    Hi! My name is Kishore, a programming enthusiast who loves exploring new buzz words in tech-world, while keeping the fundamentals strong. It all started with solving problems in hacker rank and here I’m solving real world problems.
                </p>
                <p>
                    I work in a <a href="https://www.zoomrx.com" target="_blank" rel="noopener noreferrer">
                        strategic healthcare consulting company
                    </a> as a software development engineer. Apart from work I love exploring new places and clicking
                    some <a href="https://www.instagram.com/i_click_memories/" target="_blank" rel="noopener noreferrer">
                        photos
                    </a>.
                </p>
                <p>
                    Some of the technologies I’m working with recently,
                </p>
                <ul className="about-section__skill-set">
                    <li className="about-section__skill-set--list">JavaScript (ES6+)</li>
                    <li className="about-section__skill-set--list">Ember</li>
                    <li className="about-section__skill-set--list">Svelte</li>
                    <li className="about-section__skill-set--list">React</li>
                    <li className="about-section__skill-set--list">Mithril</li>
                    <li className="about-section__skill-set--list">Express JS</li>
                    <li className="about-section__skill-set--list">SQL</li>
                    <li className="about-section__skill-set--list">GIT</li>
                </ul>
            </div>
            <img className="about-section__profile-image" src={profile} alt="profile" />
        </div>
    );
}

export default About;
