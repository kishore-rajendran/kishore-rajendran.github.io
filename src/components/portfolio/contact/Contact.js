import React from 'react';
import { ReactComponent as Github } from '../../../assets/svg/github.svg';
import { ReactComponent as Stackoverflow } from '../../../assets/svg/stackoverflow.svg';
import { ReactComponent as Linkedin } from '../../../assets/svg/linkedin.svg';
import { ReactComponent as Hackerrank } from '../../../assets/svg/hackerrank.svg';
import { ReactComponent as Gmail } from '../../../assets/svg/gmail.svg';
import './style.scss';

function Contact () {
    let platforms = [
        {
            name: "Github",
            slug: Github,
            link: "https://github.com/kishore-rajendran",
        }, {
            name: "LinkedIn",
            slug: Linkedin,
            link: "linkedin.com/in/kishorerajendrann"
        }, {
            name: "HackerRank",
            slug: Hackerrank,
            modifier: "--resize",
            link: "https://www.hackerrank.com/kishoreraj17"
        }, {
            name: "StackOverflow",
            slug: Stackoverflow,
            link: "https://stackoverflow.com/users/14461089/kishore-rajendran"
        }, {
            name: "Gmail",
            slug: Gmail,
            link: "mailto:kishorerajendran7@gmail.com"
        }
    ];
    return (
        <div className="contact-section">
            <div className="contact-section__content">You can view my profile across different platforms down and feel free to drop a buzz word into my email.</div>
            {platforms.map((platform, key) => (
                <a href={platform.link} className="platform" target="_blank" rel="noopener noreferrer" key={key}>
                    <platform.slug className={"platform__logo" + (platform.modifier ? " platform__logo" + platform.modifier : "")} />
                    <div className="platform__name">
                        {platform.name}
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Contact;
