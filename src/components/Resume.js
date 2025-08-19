import React from "react";

// Temporary placeholder PDF link
// You can replace this with your own uploaded resume later
const resumeFile = "/SharanyaGajananNemadeResume2.pdf";


<a href={resumeFile} target="_blank" rel="noopener noreferrer">
    📄 Download Resume
</a>


function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                📄 Download Resume
            </a>
        </section>
    );
}

export default Resume;
