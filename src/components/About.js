import React from "react";


const profileImage = process.env.PUBLIC_URL + "/Sharanya_Nemade.jpg";

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img
                src={profileImage}
                alt="Sharanya Nemade"
                style={{ width: "150px", borderRadius: "50%", margin: "10px 0" }}
            />
            <p>
                Hi, I'm Sharanya Nemade, a passionate developer learning React
                and building amazing web applications. I enjoy solving problems,
                exploring modern web technologies, and creating clean, responsive designs.
            </p>
        </section>
    );
}

export default About;
