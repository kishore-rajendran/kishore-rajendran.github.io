import React from 'react';
import './style.scss';
import { ReactComponent as Github } from '../../../assets/svg/github.svg';
import { ReactComponent as Link } from '../../../assets/svg/link.svg';
import { ReactComponent as Folder } from '../../../assets/svg/folder.svg';

function Projects () {
    let projects = [
        {
            github: "https://github.com/kishore-rajendran",
            website: "https://google.com",
            title: "ljdjfjk",
            description: "ljkdfjkjkfdjkljl kdjflkjdfkj lfdjjlkdjflkjlfd ldjfjlkjfdl fdjljdkj",
            toolsUsed: ["ember", "scss"]
        }, {
            github: "https://github.com/kishore-rajendran",
            website: "",
            title: "ljdjfjk",
            description: "ljkdfjkjkfdjkljl kdjflkjdfkj lfdjjlkdjflkjlfd ldjfjlkjfdl fdjljdkj",
            toolsUsed: ["ember", "scss"]
        }, {
            github: "https://github.com/kishore-rajendran",
            website: "",
            title: "ljdjfjk",
            description: "ljkdfjkjkfdjkljl kdjflkjdfkj lfdjjlkdjflkjlfd ldjfjlkjfdl fdjljdkj",
            toolsUsed: ["ember", "scss"]
        }, {
            github: "https://github.com/kishore-rajendran",
            title: "ljdjfjk",
            description: "ljkdfjkjkfdjkljl kdjflkjdfkj lfdjjlkdjflkjlfd ldjfjlkjfdl fdjljdkj",
            toolsUsed: ["ember", "scss"]
        },
    ];
    return (
        <div className="project-section">
            {projects.map((project, key) => (
                <div className="project" key={key}>
                    <div className="project__header">
                        <Folder className="project__folder" />
                        <div className="project__links-container">
                            {project.github &&
                                <a href={project.github}><Github className="project__link" /></a>
                            }
                            {project.website &&
                                <a href={project.website}><Link className="project__link project__link--light-slate" /></a>
                            }
                        </div>
                    </div>
                    <div className="project__title">
                        <a className="project__title--link" href={project.website || project.github}>
                            {project.title}
                        </a>
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
            ))}
        </div>
    );
}

export default Projects;
