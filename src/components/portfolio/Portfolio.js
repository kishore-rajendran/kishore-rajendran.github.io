import React from 'react';
import Navigation from './navigation/Navigation';
import Landing from './landing/Landing';
import About from './about/About';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import './style.scss';

function Portfolio () {
    let sectionHeaders = [
        { name: "About", slug: About },
        { name: "Experience", slug: Experience },
        { name: "Projects", slug: Projects },
        { name: "Contact", slug: Contact }
    ];
    return (
        <div>
            <Navigation />
            <div className="page-content">
                <Landing />
                {sectionHeaders.map(header =>
                    <div className="section" id={header.name} key={header.name}>
                        <h2 className="section__header section__header--numbered">
                            {header.name}
                        </h2>
                        <header.slug />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
