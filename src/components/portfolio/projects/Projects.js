import React from 'react';
import './style.scss';
import { ReactComponent as Github } from '../../../assets/svg/github.svg';
import { ReactComponent as Link } from '../../../assets/svg/link.svg';
import { ReactComponent as Folder } from '../../../assets/svg/folder.svg';

function Projects () {
    let projects = [
        {
            github: "https://github.com/kishore-rajendran/loan-calculator",
            website: "https://loancalc.vercel.app/",
            title: "Loan Calculator",
            description: "Built a Loan Calculator app for my father using Svelte and Scss as a PWA which can be installed in any platform",
            toolsUsed: ["svelte", "scss"]
        }, {
            github: "https://github.com/kishore-rajendran/Quiz",
            website: "https://quizv1.vercel.app/",
            title: "Quiz",
            description: "A Fun Quiz Application done using Js to get a gist of DOM manipulation and MVC pattern.",
            toolsUsed: ["javascript", "html"]
        }, {
            github: "https://github.com/kishore-rajendran/blog-and-chat-application",
            title: "Blog and Chat",
            description: "A simple person-to-person chat application along with blogging. It was my first fullstack application done during college on 2018.",
            toolsUsed: ["nodeJs", "expressJs", "socket-io", "ejs"]
        },
    ];
    return (
        <div className="project-section">
            {projects.map((project, key) => (
                <div className="project" key={key} onClick={() => { window.open(project.website || project.github, "_blank"); }}>
                    <div className="project__header">
                        <Folder className="project__folder" />
                        <div className="project__links-container">
                            {project.github &&
                                <a onClick={(e) => e.stopPropagation()} href={project.github} target="_blank" rel="noopener noreferrer"><Github className="project__link--light-slate" /></a>
                            }
                            {project.website &&
                                <a onClick={(e) => e.stopPropagation()} href={project.website} target="_blank" rel="noopener noreferrer"><Link className="project__link project__link--light-slate" /></a>
                            }
                        </div>
                    </div>
                    <div className="project__title">
                        {project.title}
                    </div>
                    <div className="project__description">
                        {project.description}
                    </div>
                    <div className="project__tool-container">
                        {project.toolsUsed.map((tool, key) => (
                            <div className="project__tool" key={key}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Projects;
