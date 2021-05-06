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
                'I was introduced to the work culture of agile environment like scrum and pod.',
                'Got the opportunity to work in modern javascript (ES6+), ember, svelte, scss, mithril and tools like phabricator, git, webpack.',
                'Developed and shipped a automation tool which reduced the work of BA from days of work to few hours increasing the productivity.',
                'Built a logic puzzle game as a part of candidate assessment tool to ease the work flow of recruitment for HR team',
                'Took the responsibility of conducting fun events, managing documentation of products and been a part of the new joinee induction as SME for a POD.',
            ]
        }, {
            tabName: 'University',
            company: 'Kumaraguru college of technology',
            range: 'Aug-2016 - May-2020',
            role: 'Student',
            link: 'https://www.kct.ac.in/',
            statements: [
                'Got introduced to the computer science concepts like AI, DBMS, compilers, design patterns, OOPs, etc...',
                'We got the opportunities to explore web development, programming, machine learning related projects.',
                'Achieved a CGPA of 8.46 at the end of the course.',
                'Received Mahatma Gandhi Merit Scholarship which is awarded to Top 15 students of the batch.'
            ]
        }, {
            tabName: 'School',
            company: 'National Model',
            range: 'Apr-2014 - Apr-2016',
            role: 'Student',
            link: 'http://nationalmodel.in',
            statements: [
                'Got my first glance at programing here.',
                'Achieved a score of 93% in public exam.',
                'The course included computer science, maths, physics, chemistry.',
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
