import React from 'react'


import SingleProject from '../components/SingleProject';

function Projects() {
    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 1)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, [])
    
    let projects =[{
        projectname: 'RealTime Tracker',
        projectthumbnail:  './images/one.jpg', 
        projectdesc: 'A backend protect to determine live distance and possible ways of reaching the destination from your current location.',
        website: 'https://rttracker-subharjun.onrender.com#RealTimeTracking',
        tools: ['NodeJS','ExpressJS','Leaflet','Socket.io'],
    },{
        projectname: 'Chess 1v1 realTime',
        projectthumbnail: './images/two.jpg',
        projectdesc: 'live chess game with drag-drop functionality.( not playable on mobile devices currently.. updation is ongoing',
        website: 'https://subharjunchess1on1.onrender.com',
        tools: ['NodeJS', 'ExpressJs', 'ChessJS','Socket.io'],
    }
]
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-page">
                {projects.map(item => (
                    <SingleProject key={item.github} projectname={item.projectname} projectthumbnail={item.projectthumbnail} projectdesc={item.projectdesc} github={item.github} website={item.website} tools={item.tools} />
                ))}
            </div>
        </div>
    )
}

export default Projects;