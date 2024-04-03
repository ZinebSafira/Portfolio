import React from "react";
import "../../css/normalize.css"; // Importing normalize.css for consistent styling across browsers
import "./homeTxt.css"; // Importing local CSS styles for this component
import "../../css/global.css"; // Importing global CSS styles
import { Constants } from "../../constants"; // Importing Constants object from a file (presumably containing project details)
import Fade from 'react-reveal/Fade'; // Importing Fade effect from react-reveal for animations
import { Link } from "gatsby"; // Importing Link component from Gatsby for navigation

// Function to build project links based on provided projects array
function buildProjectLinks(projects, mouseOverCallback) {
    return Array.from(Array(projects.length).keys()).map((i) => {
        return (
            <Link className="width100" hex="#000000" to={projects[i]}>
                <div className="link__wrapper" onMouseOver={mouseOverCallback}>
                    {/* Using Constants object to dynamically populate project details */}
                    <h2 className="home__brow home__brow--left">{Constants[projects[i]].heroYear}</h2>
                    <h1 id={projects[i]} className="home__head">{Constants[projects[i]].heroName}</h1>
                    <h2 className="home__title">{Constants[projects[i]].heroTitle}</h2>
                    <h2 className="home__brow">{Constants[projects[i]].heroCategory}</h2>
                </div>
            </Link>
        );
    });
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Functional component declaration using arrow function syntax
export default props => (
    <>
        {/* Wrapper div for the home text section */}
        <div className="home__txt--wrapper">

            {/* Section containing home text */}
            <section className="home__txt">
                {/* Rendering project links using buildProjectLinks function */}
                {buildProjectLinks(props.projects, props.mouseOverCallback)}
            </section>

            {/* SVG for decorative curvy element */}
            <svg className="curvy__svg--home" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71 71C31.7878 71 0 39.2122 0 0V71H71Z" fill="black" />
            </svg>
        </div>
    </>
);
