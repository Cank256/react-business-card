import React from 'react'

export default function Main() {
    return (
        <main>
            <div className="main--first-section">
                <p className="main--name">Caleb Nkunze</p>
                <p className="main--position">Software Developer</p>
                <p className="main--website">cank256.github.io</p>
                <section className="main--buttons">
                    <button className="email-btn" onclick="window.location.href='mailto:nkunzecaleb@gmail.com'"><i className="fa fa-envelope"></i>Email</button>
                    <button className="linkedin-btn" onclick="window.location.href='https://www.linkedin.com/in/nkunzecaleb/'"><i className="fa fa-linkedin-square"></i>LinkedIn</button>
                </section>
            </div>
            
            <div className="main--second-section">
                <p className="main--about">About</p>
                <p className="about-text">I am a software developer with a particular interest in making things simple and automating daily tasks. I try to keep up with  best practices, and am always looking for new things to learn. I am good at PHP, NodeJS and MongoDB.</p>
                
                <p className="main--interests">Interests</p>
                <p className="interests-text">International and Local dishes (yeah! a fun of different kinds). Music. Internet fanatic. Bacon buff. Travel and Nature. Tech</p>
            </div>
        </main>
    )
}