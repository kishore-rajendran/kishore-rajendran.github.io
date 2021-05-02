import React, { useState } from 'react';
import './style.scss';

function Experience () {
    const [activeTab, setActiveTab] = useState(0);
    const experience = [
        {
            tabName: 'Zoomrx',
            company: 'Zoomrx',
            range: 'Aug-2019 - present',
            role: 'Software Development Engineer',
            link: 'https://www.zoomrx.com',
            statements: [
                'Integer non elit ac nisi ullamcorper iaculis.',
                'Proin aliquam ligula et ligula dignissim scelerisque in pellentesque diam.',
                'Donec in quam vitae arcu rhoncus rhoncus.',
                'Curabitur pharetra eros tristique tristique viverra.'
            ]
        }, {
            tabName: 'University',
            company: 'Kumaraguru college of technology',
            range: 'Aug-2016 - May-2020',
            role: 'Student',
            link: 'https://www.kct.ac.in/',
            statements: [
                'Integer non elit ac nisi ullamcorper iaculis.',
                'Proin aliquam ligula et ligula dignissim scelerisque in pellentesque diam.',
                'Donec in quam vitae arcu rhoncus rhoncus.',
                'Curabitur pharetra eros tristique tristique viverra.'
            ]
        }, {
            tabName: 'School',
            company: 'National Model',
            range: 'Apr-2014 - Apr-2016',
            role: 'Student',
            link: 'http://nationalmodel.in',
            statements: [
                'Integer non elit ac nisi ullamcorper iaculis.',
                'Proin aliquam ligula et ligula dignissim scelerisque in pellentesque diam.',
                'Donec in quam vitae arcu rhoncus rhoncus.',
                'Curabitur pharetra eros tristique tristique viverra.'
            ]
        }
    ];
    return (
        <div className="experience-section">
            <div className="experience-section__tab-container">
                {experience.map((entity, key) => (
                    <div
                        className={
                            "experience-section__tab "
                            + (key === activeTab
                                ? "experience-section__tab--active"
                                : ""
                            )
                        }
                        key={key}
                        onClick={() => setActiveTab(key)}
                    >
                        {entity.tabName}
                    </div>
                ))}
            </div>
            <div className="experience-section__content-container">
                {experience.map((entity, key) => (
                    <div
                        className="experience-section__content"
                        key={key}
                        hidden={key !== activeTab}
                    >
                        <h3 className="experience-section__company-container">
                            {entity.role}
                            <span className="experience-section__company">
                                &nbsp;@&nbsp;
                                <a href={entity.link} className="experience-section__company--link">
                                    {entity.company}
                                </a>
                            </span>
                        </h3>
                        <div className="experience-section__range">
                            {entity.range}
                        </div>
                        <div>
                            <ul className="experience-section__statement-container">
                                {entity.statements.map((statement, key) => (
                                    <li key={key} className="experience-section__statement">{statement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
