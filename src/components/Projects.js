import React from "react";

const Projects = () => {
    const projectList = [
        { title: "Online Bookstore", description: "E-commerce app built with React & Node.js" },
        { title: "Weather App", description: "Real-time weather app using OpenWeather API" },
        { title: "Portfolio Website", description: "Personal portfolio with responsive design" }
    ];

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
