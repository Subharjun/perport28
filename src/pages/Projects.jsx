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
        projectthumbnail:  '/images/one.jpg', 
        projectdesc: 'A backend protect to determine live distance and possible ways of reaching the destination from your current location.',
        website: 'https://rttracker-subharjun.onrender.com#RealTimeTracking',
        tools: ['NodeJS','ExpressJS','Leaflet','Socket.io'],
    },{
        projectname: 'Chess 1v1 realTime',
        projectthumbnail: '/images/two.jpg',
        projectdesc: 'live chess game with drag-drop functionality.( not playable on mobile devices currently.. updation is ongoing',
        website: 'https://subharjunchess1on1.onrender.com',
        tools: ['NodeJS', 'ExpressJs', 'ChessJS','Socket.io'],
    },{
        projectname: 'AI Career Mentor guide',
        projectthumbnail: '/images/ten.jpg',
        projectdesc: 'An AI powered app with ML integration, that helps students and aspirants to detrmine their career paths, resume analysis, Video feed to learn topics real quick, Netwoeking and event updates and a customized chatbot to interact with',
        website: 'https://career-nav-ai-ml.onrender.com',
        tools: ['Python', 'Streamlit', 'ML','API'],
    },{
        projectname: 'AI Village guide',
        projectthumbnail: '/images/nine.jpg',
        projectdesc: 'An AI powered app with ML integration, that helps villagers to get information about their village, like weather, news, economics, and a customized chatbot to interact with both related to farming and report their issues they are having.',
        website: 'https://vil-new-2-0.onrender.com',
        tools: ['Python', 'Streamlit', 'ML','API','GoogleMaps'],
    },{
        projectname: 'Village_Gentle APK',
        projectthumbnail: '/images/village_apk.jpg',
        projectdesc: 'The Apk version of the Village_gentle implented using Flutter and Dart with a solid UI/UX design and mobile compatibility',
        website: 'https://https://drive.google.com/file/d/1tldjqjFQlH4Ovzz-gRWRXyln3ZODbjef/view?usp=drivesdk',
        tools: ['Flutter', 'Dart', 'ML','API'],
    },{
        projectname: 'Career_Mentor APK',
        projectthumbnail: '/images/career_apk.jpg',
        projectdesc: 'The Apk version of the Career_Mentor implemented using Flutter and Dart with a solid UI/UX design and mobile compatibility',
        website: 'https://drive.google.com/file/d/1y7jl47r93bA1WBdkMIdCqiAE8Zp9nopr/view?usp=drivesdk',
        tools: ['Flutter', 'Dart', 'ML','API'],

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
