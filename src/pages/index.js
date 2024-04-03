import React from "react";
import SEO from '../components/seo';
import "./../css/global.css"
import Header from "./../components/header/header"
import HomeHero from "./../components/homeHero/homeHero"
import HomeTxt from "./../components/homeTxt/homeTxt"
import Contact from "./../components/contact/contact"


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: "default"
    };
  }

  handleProjectHover = (event) => {
    this.setState({
      currentName: event.currentTarget.querySelector(".home__head").id.toLowerCase()
    })
  }

  handleHeaderHover = (event) => {
    this.setState({
      currentName: "default"
    })
  }

  render() {
    return (
      <React.Fragment>
        <SEO title="Zineb Gouram" description="" />
        <main className="home">
          <Header mouseOverCallback={this.handleHeaderHover} className="nav__home" />
          <Contact /> {/* Move Contact component here */}
          <div className="hero__wrapper">
            <HomeHero currentHover={this.state.currentName} />
            <HomeTxt currentHover={this.state.currentName}
              projects={['phisher', 'airtable', 'cluse', 'ditto', 'trunks', 'semaphore']}
              mouseOverCallback={this.handleProjectHover} />
          </div>
          
        </main>
      </React.Fragment>
    )
  }
}

export default Index;
