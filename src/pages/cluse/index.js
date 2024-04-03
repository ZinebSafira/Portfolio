import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
import Glam1 from "./images/Glam1.png";
import Glam2_mp4 from "./images/Glam2.mp4";
import Glam3_mp4 from "./images/Glam3.mp4";
import Glam2_webm from "./images/Glam2.webm";
import Glam3_webm from "./images/Glam3.webm";
import Glam4 from "./images/Glam4.png";
import Glam5 from "./images/Glam5.png";
import Glam6 from "./images/Glam6.png";
import Glam7 from "./images/Glam7.png";
import Glam8 from "./images/Glam8.jpg";
import Fig1 from "./images/Fig1.png";
import Fig2 from "./images/Fig2.png";
import Fig3 from "./images/Fig3.gif";
import Fig4 from "./images/Fig4.svg";
import Fig6 from "./images/Fig6.png";
import Fig7 from "./images/Fig7.png";
import Fig8 from "./images/Fig8.png";
import Fig9 from "./images/Fig9.svg";
import Fig10 from "./images/Fig10.png";
import Fig11 from "./images/Fig11.gif";
import Fig12 from "./images/Fig12.png";
import Fig13 from "./images/Fig13.png";
import Fig14 from "./images/Fig14.png";
import Fig15 from "./images/Fig15.png";
import Fig16 from "./images/Fig16.png";
import Fig18 from "./images/Fig18.png";
import Fig19 from "./images/Fig19.png";
import Fig20 from "./images/Fig20.png";
import Fig23 from "./images/Fig23.png";
import Fig24 from "./images/Fig24.gif";
import Fig25 from "./images/Fig25.gif";
import Fig26 from "./images/Fig26.gif";
import Fig27 from "./images/Fig27.png";
import Fig28 from "./images/Fig28.png";
import Fig29 from "./images/Fig29.png";
import Fig30 from "./images/Fig30.png";
import Fig31 from "./images/Fig31.png";
import Fig32 from "./images/Fig32.gif";
import Fig34 from "./images/Fig34.png";
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import ListQuotes from "../../components/listQuotes/listQuotes"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import ImgFull from "../../components/imgFull/imgFull"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issue from "../../components/issue/issue"
import More from "../../components/more/more"
// import Contact from "../../components/contact/contact"
// import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"


const Glam2 = [
  {
    extension: "mp4",
    file: Glam2_mp4
  },
  {
    extension: "webm",
    file: Glam2_webm
  }
]

const Glam3 = [
  {
    extension: "mp4",
    file: Glam3_mp4
  },
  {
    extension: "webm",
    file: Glam3_webm
  }
]

class Index extends React.Component {
  render() {
    return (
      <div className="cluse">
        <SEO title="AMW veranda" description="Festivalzone: Online hub for personalized festival experiences, expanding from Bol.com to its own platform with diverse products and user-friendly features." />
        <Header />
        <div className="hero__wrapper">
          <InnerHero img={Hero} />
          <InnerTxt heroCategory={Constants.cluse.heroCategory}
            heroYear={Constants.cluse.heroYear}
            heroDeliverable={Constants.cluse.heroDeliverable}
            heroTitle={Constants.cluse.heroTitle}
            heroSummary="Festivalzone: Online hub for personalized festival experiences, expanding from Bol.com to its own platform with diverse products and user-friendly features. "
          />
        </div>
        {/* <Abstract glams={
          [
            [Glam1],
            [Glam2, Glam7],
            [Glam6, Glam3],
            [Glam4, Glam5],
            [Glam8]
          ]
        }
          abstractTeam="Just me"
          abstractRole="UI Designer · Developer"
          abstractTools="FIGMA · HTML · CSS · JS"
          abstractTime="3 months · December 2019"
          abstractBody="Cluse is a Sketch plugin that serves as a diagnostic tool to ensure that the design meets WCAG 2.0 color contrast standards. To address the lack of an accessibility workflow on design teams, I set out to create a tool that is free, open-source, lightweight and baked into the tools designers use most."
          liveLink="https://cluse.cc"
          gitLink="https://github.com/ygev/cluse" /> */}
        <Tracker phaseList={['UNDERSTAND', 'DEFINE', 'DESIGN', 'DEVELOP', 'VALIDATE', 'PROMOTE', 'EXHIBIT']}
          trackerHead={Constants.cluse.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="The Multilingual Challenge: Building AMW Veranda's Online Presence" />
          <ImgLeft img={""} padding="yes" imgNum="01" imgCaption="A glimpse of AMW Veranda's exquisite craftsmanship." />
          <Paragraph paragraphTitle="What AMW Veranda Needed"
            paragraphBody="AMW Veranda, a leading provider of high-quality outdoor living solutions, approached us with a unique challenge: they needed a website that caters to their multilingual clientele. With customers across the Netherlands, Germany, and beyond, AMW Veranda required a platform that seamlessly presents content in Dutch, German, and English." />
          <Paragraph paragraphTitle="Expanding Reach Through Online Presence"
            paragraphBody="In today's digital age, having a robust online presence is crucial for businesses looking to expand their customer base. AMW Veranda recognized this and saw an opportunity to attract more customers by establishing a strong online presence. By offering their services in multiple languages, they aimed to connect with a broader audience and drive more inquiries." />
          <List listTitle="Key Requirements for AMW Veranda's Website" listType='ul'
            listItems={["Multilingual Support: Dutch, German, and English content.",
              "Customized Contact Pages: Direct inquiries to the appropriate Dutch or German email address based on the user's language preference.",
              "Engaging Design: Showcase AMW Veranda's craftsmanship and expertise through visually appealing design.",
              "User-Friendly Interface: Ensure seamless navigation for visitors, regardless of their language or location."]} />
          <ImgRight img={""} padding="yes" imgNum="02" imgCaption="Sneak peek at the elegant design of AMW Veranda's multilingual website." />
          <Paragraph paragraphTitle="Our Approach to Building the Solution"
            paragraphBody="To meet AMW Veranda's requirements, our team embarked on a comprehensive development process. We leveraged cutting-edge technologies to create a dynamic website that seamlessly integrates multilingual support and personalized contact pages. Our designers crafted a visually stunning interface that captures the essence of AMW Veranda's craftsmanship, enticing visitors to explore further." />
          <ImgRight img={""} padding="yes" imgNum="03" imgCaption="Custom contact pages tailored to the language preferences of AMW Veranda's diverse clientele." />
          <Paragraph paragraphTitle="Empowering AMW Veranda's Online Growth"
            paragraphBody="With the new multilingual website in place, AMW Veranda is well-positioned to expand its reach and attract a diverse clientele. Whether customers prefer Dutch, German, or English, they can now access AMW Veranda's services with ease. By embracing the power of the internet, AMW Veranda is poised for continued growth and success in the competitive outdoor living market." />
          <HowMightWe howMightWe="How might we further enhance AMW Veranda's online presence to drive increased engagement and conversions?" />
        </div>

        <div id="p2">
          <Phase phaseTitle="Defining the Project's Scope: Enhancing AMW Veranda's Accessibility" />
          <ImgLeft img={[Fig7, Fig8]} imgNum={["04", "05"]} imgCaption={["Proper contrast ratio at 3.82:1 and poor contrast ratio at 1.34:1.", "Passing contrast ratio at 3.02:1, Hex #3396FF, and failing contrast ratio at 2.95:1, Hex #3898FF."]} padding="true" />
          <Paragraph paragraphTitle="Designing for Inclusivity"
            paragraphBody="AMW Veranda recognized the importance of accessibility in their online presence. One crucial aspect they needed to address was color contrast, a key criterion outlined in accessibility standards. The WCAG (Web Content Accessibility Guidelines) sets forth guidelines to ensure content is accessible to all users, including those with disabilities. One of the most fundamental requirements is adequate color contrast between text and its background. This not only enhances readability but also ensures compliance with accessibility standards. See <<Figure 4>> for a visual demonstration." />
          <Paragraph paragraphTitle="Navigating the Fine Line"
            paragraphBody="It's remarkable how slight variations in color can make a significant difference in accessibility compliance. The distinction between passing and failing WCAG standards can sometimes be just a few hex values apart. While these differences may seem imperceptible to the naked eye, they hold immense significance in the digital realm. This discrepancy underscores the importance of meticulous attention to detail in ensuring accessibility for all users. Refer to <<Figure 5>> for a clearer illustration." />
          <Paragraph paragraphTitle="Streamlining Accessibility Workflow"
            paragraphBody="In optimizing AMW Veranda's online accessibility, a streamlined workflow was imperative. Drawing from industry best practices, we observed that efficient accessibility workflows are essential for maintaining compliance and minimizing errors. Leveraging tools like the WebAIM Contrast Checker, designers can swiftly assess color contrast and ensure adherence to accessibility guidelines. However, traditional workflows often involve tedious manual processes, hindering efficiency. See below for an overview of the conventional workflow:" />
          <ImgFull img={Fig3} imgNum="06" imgCaption="Current contrast checking workflow of most design teams: a lot of tabbing back and forth that could be eliminated." />
          <Paragraph paragraphTitle=""
            paragraphBody="Recognizing the need for optimization, we explored avenues to enhance the accessibility workflow. By integrating design accelerators like Sketch or Figma plugins, we aimed to streamline the process and improve efficiency. Eliminating manual tasks such as copying and pasting HEX codes reduces the margin for error and enhances productivity. Visualize the proposed workflow in <<Figure 7>> for a more efficient contrast checking process." />
          <ImgFull img={Fig4} imgNum="07" imgCaption="Proposed contrast checking workflow with the use of a built-in design accelerator." />
          <ImgLeft img={Fig9} imgNum="08" imgCaption="Competitive analysis findings of color contrast plugins big and small." padding="yes" />
          <Paragraph paragraphTitle="Analyzing Accessibility Plugins"
            paragraphBody="Our exploration led us to assess various accessibility plugins available in the market. Conducting a thorough competitive analysis, we identified Stark as a leading plugin for assessing color contrast in design projects. Stark stood out for its comprehensive features, including clear pass/fail indicators and versatility in analyzing text and shape layers. However, despite its efficacy, Stark's proprietary nature posed limitations in accessibility and universality." />
          <Paragraph paragraphTitle="Striving for Universal Accessibility"
            paragraphBody="In our quest for accessibility excellence, we recognized the need for universal accessibility solutions. While Stark excelled in functionality, its proprietary nature posed barriers to widespread adoption. We believe that accessibility tools should be universally accessible and freely available to all designers. This ethos guided our commitment to developing accessible solutions that empower designers and promote inclusivity." />
          <ImgRight img={Fig10} imgNum="09" imgCaption="Testing Stark's website with Stark's plugin." />
          <Paragraph paragraphTitle="Insights and Innovations"
            paragraphBody="Through our research and experimentation, we unearthed valuable insights into the accessibility landscape. One notable observation was the lack of substitutes for failing color combinations among existing plugins. This limitation necessitated designers to revert to manual processes, prolonging workflow inefficiencies. Additionally, the absence of plugins for assessing hover states and descriptive link text posed further challenges in ensuring comprehensive accessibility compliance." />
          <ImgLeft img={Fig11} imgNum="10" imgCaption="The Key" padding="yes" />
          <Paragraph paragraphTitle="Empowering Designers through Innovation"
            paragraphBody="Our journey underscored the pivotal role of innovation in driving accessibility advancements. Recognizing the shortcomings of existing tools, we embarked on a mission to develop a solution that not only detects poor contrast but also facilitates real-time adjustments without disrupting the design workflow. This vision guided the delineation of our project deliverables, outlined below:" />
          <List listTitle="Deliverables" listType='ul'
            listItems={["<<Downloadable .sketchplugin File>> The plugin itself.",
              "<<Informational Website>> All good plugins ought to have one.",
              "<<Exhibition Plan>> This project will be showcased at MICA's ArtWalk Exhibition.",
              "<<Promotional Stickers>> A fun and engaging way to promote the plugin.",
              "<<Documentation on GitHub>> Essential for fostering community engagement and collaboration."]} />
        </div>


        <div id="p3">

          <Phase phaseTitle="Designing a Sketch-Esque Interface" />
          <Paragraph paragraphTitle="Feature Downselection" paragraphBody="With 3 months to complete the project, I wanted to add everything that makes WebAIM's Contrast Checker great, and more. Although I minimized the number of features for the plugin to the essentials, I compiled a backlog of nice-to-have additions for the future." />
          <ImgRight img={Fig12} imgNum="11" imgCaption="Isolating the Essentials" />
          <ImgLeft img={[Fig16]} imgNum={"12"} imgCaption={["Drafting priority guidelines for the need-to-have features and drawing wireframes."
          ]} padding="true" />
          <Paragraph paragraphTitle="Familiar Patterns" paragraphBody="<<Good plugins look like an extension of the software. They do not visually overpower the tool they supplement.>> I think back to Stark's huge modal that covered 25% of my 13&quot; MacBook screen. As my visual guide, I once again look towards the accessibility tool designers use most: WebAIM's Contrast Checker. I aimed to design a syncretic tool that functions like the Contrast Checker and fits into the Sketch visual language." />
          <ImgRight img={Fig15} imgNum="13" imgCaption="Cluse's Interface = WebAIM's Contrast Checker masked as a Sketch modal." />
          <Paragraph paragraphTitle="Iteratively Designing the Modal" paragraphBody="The most inobtrusive and realistic way to adapt a new external feature is to use the same technique as the software uses internally. <<In this case, Sketch displays auxilliary features as modals.>> After brainstorming wireframes based on my priority guidelines, I took to the artboard:" />
          <Issue img={Fig13} issueTitle="Cluse UI 1.0 User Feedback" issueItems={["Why is the preview so prominent?", "Why is there no Cluse branding?", "What does the half-color mean?", "What's in the other tabs?"]} />
          <Paragraph paragraphTitle="More Mac OS than Sketch" paragraphBody="The code for Sketch's UI consists of many native macOS frameworks. I followed Sketch's example and created a macOS-style modal for a start. With high hopes, I tabulated the feature groups for future development. I borrowed the half-colored scrubber from Adobe, so that one could keep track of the original color. The crown on the initial design is a large preview that takes up a quarter of the modal. Upon speaking with users, as well as my degree project advisor, issues were noted. <<The premature tabulation ensures scope creep.>> The preview is not representative of most elements that are tested for color contrast. The modal lacked Cluse identifiers. The half-color scrubber was an unfamiliar pattern to most users tested and was too small to click on." />
          <Issue img={Fig19} issueTitle="Cluse UI 1.5 User Feedback" issueItems={["Three buttons for a simple modal?", "What's the point of two previews?", "Why are the hex inputs dark mode?", "Tautological section labels."]} />
          <Paragraph paragraphTitle="More Sketch than Mac OS" paragraphBody="Cluse's next iteration was more Sketch than macOS. Instead of the dark-mode hex inputs, it mimicked the Sketch inputs. The Sketch-modal-style header was now adornished with Cluse's logo and some instructions. It also sported two previews, one for large text, and another for small text. <<However, the copywriting of the labels was unclear; the interface suffered from feature bloat and poor whitespace management.>> The next version aimed to trim down the fat." />
          <Issue img={Fig14} issueTitle="Cluse UI 1.7 User Feedback" issueItems={["Resembles Sketch a lot.", "Why not live preview instead?", "The sliders are comically thin."]} />
          <Paragraph paragraphTitle="Downsizing" paragraphBody="<<After removing the superfluous preview, I concluded that this was the safest stage to start the code.>> Most of my time was spent on connecting the Sketch API and my WebUI, a methodology to create plugin interfaces for Sketch Plugins using HTML/CSS. <<While reading the Sketch API documentation, I learned that I could do a live preview instead of an in-modal preview of the color contrast. As a result, the next interface change is a significant pivot in the priority guidelines.>>" />
          <ImgLeft img={[Fig24]} imgNum={["14"]} imgCaption={["Demonstration of the new live preview feature."
          ]} padding="true" />
          <Issue img={Fig18} issueTitle="Cluse UI 1.9 User Feedback" issueItems={["Cleaner colors.", "Sliders are too thick.", "Opportunity for compact layout.", "Repetitive instructions."]} />
          <Paragraph paragraphTitle="Live Preview" paragraphBody="The live preview was a game changer. From this point on, when you moved the sliders, it affected the selected layers directly. With the blue box of placeholder text rendered obsolete, the UI was down to the essentials. I confidently proceeded with this design until the later stages of development." />
          <Issue img={Fig20} issueTitle="Cluse UI 2.0 User Feedback" issueItems={["Compact, allows for extra features.", "Resembles Sketch's sidebar.", "Sketch-style inputs and sliders.", "Logistics at the bottom.", "Action items on top."]} />
          <Paragraph paragraphTitle="Vertically Endowed Modal" paragraphBody="The final modal for the 1.0 release of Cluse adapted the verticality of Sketch's sidebar menu. This allowed for an easy addition of new features, such as undoing or swapping colors. This layout is unlikely to change in the future, since it meets all requirements of the project's scope. Boiled down to the essentials, it allows one to select a two layers and check or alter their color contrast." />
        </div>
        <div id="p4">
          <Phase phaseTitle="Quirks of Sketch Plugin Development" />
          <ImgLeft img={[Fig30, Fig25]} imgNum={["15", "16"]} imgCaption={["Notes on Sketch Plugin Development", "The Hue Data Loss Bug"]} padding="yes" />
          <Paragraph paragraphTitle="Learning Curve" paragraphBody="Having no experience with making Sketch Plugins of this size, I took to Googling some tutorials. Surprisingly, there are very few resources on this sort of thing, especially when you're trying to make your own user interface. [[Matt Curtis' tutorial in Smashing Magazine>https://www.smashingmagazine.com/2019/07/build-sketch-plugin-javascript-html-css-part-1/]] is the most helpful guide I've found. I took meticulous notes on Sketch API, Objective-C and MochaJS concepts and seeked outside help from Kian Bradley, a developer at AWS." />

          <Paragraph paragraphTitle="Bridging Sketch API and a Web UI" paragraphBody="Although my interface is minimal, its implementation is not as simple as it looks. The actions of my plugin are more than Sketch API can accomplish singlehandedly. Sketch API needs to be supplemented by CocoaScript and MochaJS. CocoaScript is Sketch's proprietary language bridging Sketch API and internal macOS frameworks. MochaJS is used to bridge internal macOS frameworks and JavaScript. This allows me to create the UI with HTML and CSS and write all the logic in JavaScript." />
          <Paragraph paragraphTitle="Deprecated Role Model" paragraphBody="Like the design, my development journey took inspiration from WebAIM's Contrast Checker. Before I take on a role model, I try to find its vulnerabilities. <<After trying to break the Contrast Checker for a few minutes, I found a functionality-breaking bug.>> If one scrubs the slider either to the left-most or right-most side and returns it to the middle, all the color data disappears. The user remains with shades of gray. I downloaded the source files of the web page and looked at the algorithm used for calculating the contrast ratio, as well as changing the hex value. <<Based on the presence of a math( ) function, I concluded that we're dealing with some fine vintage code.>> " />
          <ImgRight img={Fig26} padding="yes" />
          <Paragraph paragraphTitle="Eliminating WebAIM's Hue Data Loss" paragraphBody="The loss of color data ocurred because WebAIM's code converted the hex user input into RGB for contrast ratio calculation. When you scrubbed the slider to the minimum brightness value, the RGB value was (0, 0, 0). This means that the original hue of the hex code is not retained. <<On the other hand, I used an HSL color model, which saves the hue. In HSL, the slider controlled by the user alters the luminosity value and preserves the hue, eliminating WebAIM's hue data loss.>> Then I filed a bug report to WebAIM." />
        </div>
        <div id="p5">
          <Phase phaseTitle="Conducting Usability Testing" />
          <Paragraph paragraphTitle="Task Analysis" paragraphBody="In order to test Cluse's ease of use, I planned a task analysis. I created a test file to disseminate throughout my user testing group. In addition to testing basic actions, I want to test one variation: whether users select an artboard or the layers for testing. All my users were proficient in Sketch, although only one of them has used any sort of plugin before." />
          <ImgRight img={Fig27} imgNum="17" imgCaption="Cluse Usability Assessment Sketch File" />
          <Issue img={Fig29} issueTitle="Verbal Instructions"
            issueItems={["Launch Cluse for Button 1",
              "Make Button 1 pass AA",
              "Undo the change.",
              "Make Button 1 pass AAA",
              "Save Button 1",
              "Launch Cluse for Button 2",
              "Swap the Colors on Button 2",
              "Save Button 2",
              "Now do the same actions to the next set of buttons."]} />
          <ImgLeft img={Fig28} imgNum="18" padding="yes" imgCaption="Usability testing set-up with screen-sharing and video chat." />
          <Paragraph paragraphTitle="What Users Said During a Cognitive Walkthrough"
            paragraphBody="The following are some of the most insightful quotes I have gathered from the usability test:" />
          <ListQuotes listTitle="" listType='ul'
            listItems={["Nothing was confusing. It's a straightfoward kind of plugin.",
              "I will say that when you asked me to Undo the change, <<I reached for ⌘+Z. It didn't work.>> Then I saw the undo button.",
              "How does it distinguish text size?",
              "It's very compact, looks like the Sketch sidebar."
            ]} />
          <Paragraph paragraphTitle="🔍 Insights" paragraphBody="Most users followed the projected workflow. Two out of three users stumbled on the second part of the test with artboard-based buttons. Seeing that the button is an artboard, the users selected the artboard and tried to launch the plugin. However, when seeing that the plugin is not launching, they selected the background and foreground layers separately. This may be a learned behavior from the first test. <<This issue signals to me that I should create a functionality in Cluse to select artboards and layer groups as long as they have a background and a foreground.>> Another user's first instinct upon needing to Undo was to <<click ⌘+Z, but that shortcut does not exist in Cluse yet.>> That was such a no-brainer that I added it immediately after the test." />
        </div>
        <div id="p6">

          <ImgLeft img={Fig31} imgNum="19" imgCaption="The evolution of Cluse's website through Sketch artboards." />
          <Phase phaseTitle="Promoting Web Accessibility" />
          <Paragraph paragraphTitle="Online Presence" paragraphBody="In addition to maintaining a readme on GitHub, a good way to establish an online presence for the plugin is to create a website for it. I used my accelerated process for building sites: priority guidelines, wireframes, then mid- to hi-fidelity mockups." />
          <ImgRight img={Fig23} imgNum="20" imgCaption="Planning out and wireframing Cluse's website." />
          <ImgLeft img={Fig32} imgNum="21" imgCaption="Demonstration of the interactive slider on Cluse's website." padding="yes" />
          <Paragraph paragraphTitle="Breaking the Fourth Wall" paragraphBody="Although most plugin websites were minimal, consisting of a few screenshots and a download link, I wanted to try something different. After some experimentation, <<I chose to highlight what separates this contrast plugin from the rest: a slider.>> My final iterations included an interactive slider on top of the site. <<Upon scrubbing back and forth, the entire background of the site changes and reveals whether the combination passes WCAG or not.>> This was also the most time-effective option, as I reused the very code Cluse uses to analyze color contrast. [[Feel free to mess with it on Cluse's site.>https://cluse.cc/]]" />
        </div>
        <div id="p7">
          <Phase phaseTitle="How does one exhibit software?" />
          <Paragraph paragraphTitle="Beyond Screen-Centric Exhibitions" paragraphBody="As Cluse is my degree capstone, it was to be exhibited in the senior show. This posed an interesting challenge. <<Cluse was a piece of software, unlike other exhibited projects rooted in graphic design.>> How do I exhibit software? I did not want to put a screen on a pedestal and call it a day, so I decided to think about the context in which Cluse would be used in. <<As a result, my exhibition aims to recreate a designer's workspace.>>  I had a large desk, a chair and a plant to accompany the monitor. Additionally, I painted the gallery wall Cluse-blue and plotted vinyl decals on it to mimic the Cluse's homepage." />
          <ImgLeft img={Fig34} imgNum="22" imgCaption="Sticker preview cubes, stickers and the modal posters on the desk." />
          <Paragraph paragraphTitle="Guerilla Sticker Campaign" paragraphBody="To expand on my exhibition, I designed transparent stickers with the three WCAG conformance levels and had them printed on transparent sticker paper with white ink. Each pile of stickers on the table was accompanied by a cube showcasing an example of that kind of color contrast, as well as a corresponding Cluse modal poster above it. The stickers were disseminated to people as a form of a guerilla campaign against poor color contrast. The audience were encouraged to place the stickers in places around campus. For instance, examples of exemplary color contrast, would get the AAA sticker, whereas poor color contrast would receive the A sticker." />
          <Paragraph paragraphTitle="Exhibition Feedback and Future Endeavors" paragraphBody="Feedback from faculty and students has been overwhelmingly positive. The new chair of Graphic Design at MICA proposed that it should be part of the curriculum of a UX class taught in the fall. I have started working on a Figma port for the plugin, so that it can be used in the classroom, starting Fall 2020. Otherwise, I will work on bug fixes as they come in and maintain the project as long as I can. [[Check GitHub for the latest release.>https://www.github.com/ygev/cluse]]" />
          <Paragraph paragraphTitle="Sketch Endorsement" paragraphBody="Since February 2020, Cluse has been officially endorsed by Sketch in [[a Facebook post>https://www.facebook.com/sketchapp/posts/were-big-fans-of-plugins-that-encourage-accessibility-and-inclusivity-in-design-/2682806741839651/]]. In May 2020, for Global Awareness Accessibility Day, I gave [[an interview to Sketch about Cluse,>https://blog.sketchapp.com/accessible-design-in-conversation-with-cluse-developer-yana-gevorgyan-38558381eb4b]] as well as my views on accessibility in the design sector." />
        </div>
        {/* <More /> */}
        {/* <Contact />
        <Footer /> */}
      </div>
    )
  }
}

export default Index

