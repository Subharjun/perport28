import React from 'react'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

function About() {
  const [fontSize, setFontSize] = React.useState(24);

  React.useEffect(() => {
    document.querySelectorAll('.tabs a').forEach((e, index) => {
      if (index !== 0)
        e.classList.remove('open');
      else
        e.classList.add('open');
    })
    if (window.innerWidth < 768)
      setFontSize(14);
  }, []);

  window.addEventListener('resize', e => {
    if (window.innerWidth < 768)
      setFontSize(14);
    else
      setFontSize(24)
  })

  const codeText = document.createElement('textarea');
  codeText.value = `  class Portfolio {
    // Focused on mastering problem-solving through consistent DSA practice.
    // Currently building and refining two long-term full-stack/ML projects.
    // Exploring how machine learning and real-time systems can solve real problems.
    // Strengthening core skills: clean code, system design, and deployment.
    // Balancing learning with building — not perfect, but progressing.

    constructor(){
         this.name = "Subharjun Bose";
         this.title = "Computer Science Engineer";
    }

    workExperience() {
        return [
            { 'April 2022 - October 2022': 'Teaching assistant at Brainly' },
            { 'September 2023 - Present': 'Member at GDG on Campus' }
        ];
    }

    education() {
        return [
            { '2022 - 2026': 'B Tech at GNIT, Kolkata, West Bengal' }
        ];
    }

    skills() {
        return [
            'HTML/CSS/JS',
            'ReactJS',
            'Git/GitHub',
            'NodeJS',
            'JavaScript',
            'SQL/NoSQL',
            'Machine Learning',
            'NextJS',
            'ThreeJS',
            'Docker',
            'Streamlit',
            'Python',
            'Operating Systems',
            'Computer Networks'
        ];
    }    

    everydayTarget(){
        return [
            'Solve at least 2 LeetCode problems — sharpen logic daily 💻',
            'Explore Machine Learning & NLP — curiosity fuels progress 🤖',
            'Build real-world apps — from rural impact to career tools 🌍',
            'Learn one new thing in tech — even if it’s small 📚',
            'Stay humble, stay consistent — long-term beats quick wins 💡'
        ];
    }
  };`;

  const code = codeText.value;

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <AceEditor
        className="about-code"
        mode="javascript"
        theme="dracula"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        showGutter={false}
        showPrintMargin={false}
        maxLines={100}
        fontSize={fontSize}
        setOptions={{
          readOnly: true,
        }}
        value={code}
      />
      <h1>Wanna Know More !</h1>
        <div className="socials">
            
            <a href="https://www.linkedin.com/in/subharjun-bose-202132251" target="_blank" rel = "noreferrer"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
            <a href="mailto:subharjun.bose2805@gmail.com?subject=Inquiry&body=Hello%20Subharjun," target="_blank" rel="noreferrer"><abbr title="My Gmail" className="fas fa-envelope"></abbr></a>

            
            
        </div>
    </div>
  )
}

export default About;
