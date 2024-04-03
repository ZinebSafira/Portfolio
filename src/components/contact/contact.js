import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Marquee from ".././marquee/marquee"

export default props => (
    <>
        <section className="contact">
            <h3 className="contact__txt">
                <h4 className="contact__head">👋 Hey, there!</h4>
                I'm Zineb, a designer and developer eager to learn more and create amazing things!
                Welcome to my little slice of the web.</h3>
            <div className="btn__contact--wrapper">
                {/* <a target="_blank" rel="noopener noreferrer" href="https://are.na/yana"><button className="btn__contact">Are.Na</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a> */}
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zenoubagouram/"><button className="btn__contact">LinkedIn</button></a>
            </div>
        </section>
    </>
);  