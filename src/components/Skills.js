import React from "react";

const Skills = () => {
    const skills = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "SQL", "HTML", "CSS"];

    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
