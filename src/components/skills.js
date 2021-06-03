import React from 'react'

import HTML5 from "../../static/assets/logos/logoHtml.png";
import css3 from "../../static/assets/logos/logoCss.png";
import javascript from "../../static/assets/logos/logoJs.png";
import react from "../../static/assets/logos/logoReact.png";
import python from "../../static/assets/logos/logoPython.png";
import django from "../../static/assets/logos/logoDjango.png";


const Skills = () => {

    return (
        <div className='skills-wrapper'>
            <div className="skill">
                <h1>HTML5</h1>
                <img src={HTML5}/>
            </div>
            <div className="skill">
                <h1>CSS3</h1>
                <img src={css3}/>
            </div>
            <div className="skill">
                <h1>Javascript</h1>
                <img src={javascript}/>
            </div>
            <div className="skill" id="react">
                <h1>React.js</h1>
                <img src={react}/>
            </div>
            <div className="skill" id='python'>
                <h1>Python</h1>
                <img src={python}/>
            </div>
            <div className="skill" id='django'>
                <h1>Django</h1>
                <img src={django}/>
            </div>
        </div>
    )
}


export default Skills
