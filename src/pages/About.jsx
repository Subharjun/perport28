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
  codeText.value = ` class Portfolio{
    // I love challenges
    // Currently actively solving ds and algo problems from Leetcode
    // Improving my web development skills with everyday technologies
    constructor(){
        this.name = "Subharjun Bose";
        "Computer Science Engineer...."
    }
    workExperience() {
        return [
        { 'April 2022 - October 2022': 'Teaching assistant at Brainly'),
        { 'September 2024 - October 2024': 'React.js intern at CodSoft' },
        ]
    }
    education() {
        return [
        'Present - 2026': 'B Tech at GNIT, Kolkata, West Bengal',
        ]
    }
    skills() {
        return [ 'HTML/CSS/JS' ,'ReactJS', 'Git/Github' , 'NodeJS' , 'Java', 'SQL/NOSQL']
    }
    everydayTarget(){
        return [{'Solve atleast 2 problems from leetcode'}, 
        {'Discover new algorithms'}, 
        {'Learn about new techs'}
        ]
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
            
            <a href="https://www.linkedin.com/in/subharjun-bose-3rd-202132251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel = "noreferrer"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
            <a href="mailto:subharjun.bose2805@gmail.com?subject=Inquiry&body=Hello%20Subharjun," target="_blank" rel="noreferrer"><abbr title="My Gmail" className="fas fa-envelope"></abbr></a>

            
            
        </div>
    </div>
  )
}

export default About;
