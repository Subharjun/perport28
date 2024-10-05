import React from 'react'

function SingleProject(props) {
    return (
        <div className="project">
            <img src={props.projectthumbnail} alt={props.projectname} className="project-thumbnail" />
            <div className="project-name">{props.projectname}</div>
            <div className="project-tools">
                {props.tools.map(item => (
                    <span key = {item}>{item}</span>
                ))}
            </div>
            <div className="project-desc">{props.projectdesc}</div>
            <div className="project-links">
                <a href={props.website} target="_blank" rel = "noreferrer"><abbr title="Project Website" className="fas fa-external-link-alt"><span> Visit</span></abbr></a>
            </div>
        </div>
    )
}

export default SingleProject;