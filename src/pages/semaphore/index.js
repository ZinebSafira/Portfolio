import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
// import Glam1_mp4 from "./images/Glam1.mp4";
// import Glam1_webm from "./images/Glam1.webm";
// import Glam2_mp4 from "./images/Glam2.mp4";
// import Glam2_webm from "./images/Glam2.webm";
// import Glam3 from "./images/Glam3.png";
// import Glam4 from "./images/Glam4.png";
// import Glam5 from "./images/Glam5.png";
// import Glam6 from "./images/Glam6.png";
// import Glam7_mp4 from "./images/Glam7.mp4";
// import Glam7_webm from "./images/Glam7.webm";
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list";
import Phase from "../../components/phase/phase";
import Paragraph from "../../components/paragraph/paragraph";
import ImgRight from "../../components/imgRight/imgRight";
// import More from "../../components/more/more"

import { Constants } from "../../constants"


// const Glam1 = [
//   {
//     extension: "mp4",
//     file: Glam1_mp4
//   },
//   {
//     extension: "webm",
//     file: Glam1_webm
//   }
// ]

// const Glam2 = [
//   {
//     extension: "mp4",
//     file: Glam2_mp4
//   },
//   {
//     extension: "webm",
//     file: Glam2_webm
//   }
// ]


// const Glam7 = [
//   {
//     extension: "mp4",
//     file: Glam7_mp4
//   },
//   {
//     extension: "webm",
//     file: Glam7_webm
//   }
// ]


class Index extends React.Component {
  render() {
    return (
      <div className="semaphore">
        <SEO title="Learn Semaphore" />
        <Header />
        <div className="hero__wrapper">
          <InnerHero img={Hero} />
          <InnerTxt heroCategory={Constants.semaphore.heroCategory}
            heroYear={Constants.semaphore.heroYear}
            heroDeliverable={Constants.semaphore.heroDeliverable}
            heroTitle={Constants.semaphore.heroTitle}
            heroSummary="Say No More! is an award-winning AI game that aims to teach more people about flag-based maritime communication. Winner at UMBC 2019 Hackathon 🏆"
          />
        </div>
        {/* <Abstract glams={
          [
            [Glam1],
            [Glam3, Glam4],
            [Glam5, Glam2],
            [Glam7]
          ]
        }
          abstractTeam="Yana G. &amp; Amanda Yeh"
          abstractRole="Primary Developer · Support UI Designer"
          abstractTools="poseNet( ) · JS · Figma"
          abstractTime="24 hours · October 2019"
          abstractBody="This pose-recognition-based game introduces the user to flag semaphore in a fun and competitive way. The player is prompted with a letter and a corresponding pose that they must recreate. As the player completes more rounds, they develop muscle memory and think more quickly about each pose, improving their fluency in flag semaphore. Who knows when they will need it?"
          liveLink="https://ygev.github.io/semaphore"
          gitLink="https://github.com/ygev/semaphore" /> */}
        <Tracker phaseList={['UNDERSTAND', 'DEFINE', 'DESIGN', 'DEVELOP']}
          trackerHead={Constants.semaphore.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Understanding the State of Casual Operational Security" />
          <List listTitle="Research Questions" listType='ul'
            listItems={["How have attitudes towards OPSEC changed nation-wide, given recent data breaches and hacks?",
              "To what extent do people at Maryland Institute College of Art use password managers?",
              "To what extend do people mindlessly enter personal data into credible interfaces?"]} />
          <Paragraph paragraphTitle="Surveying National Opsec Engagement"
            paragraphBody="According to a [[study>https://www.pewresearch.org/internet/2017/01/26/americans-and-cybersecurity/]] by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost [[poll>https://threatpost.com/poll-password-managers-risky/142114/]] found that <<84% of respondents use password managers,>> with only 10 percent of people saying that they don't due to perceived security risks." />
          <ImgRight img={""} imgNum="01" imgCaption="Pew Research Center, 2019" />
          <Paragraph paragraphTitle="Surveying Students' Opsec Engagement"
            paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally <<surveyed 15 students>> and plotted the most insightful responses on a scale from positive to negative." />
          <ImgRight img={""} imgNum="02" imgCaption="Plotted testimonies from MICA students about the two-factor authentication system established in Fall 2019." />
          <Paragraph paragraphTitle="Considering Mindless UI Patterns"
            paragraphBody="<<The main cause of phishing is the lack of user training.>> Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited." />
        </div>
        {/* <More />
       
        <Footer /> */}
      </div>
    )
  }
}

export default Index

