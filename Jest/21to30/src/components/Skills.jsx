import React, { useState } from "react";

const Skills = (props) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return (<li key={skill}>{skill}</li>)
                })}
            </ul>
            {isLoggedIn ? (<button type="button">Start Learning</button>) : (<button type="button">Login</button>)}
            <h1>Sujit Kumar Verma</h1>
        </>
    );
}

export default Skills;