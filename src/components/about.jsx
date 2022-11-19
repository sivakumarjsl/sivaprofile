import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "Node_skill", content: "node", porcentage: "60%", value: "60" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:

            `	Over 5+ years of IT experience which includes 5 years of Extensive experience as a React. in developing web pages using HTML,  CSS, SASS, LESS, JavaScript, React JS, Redux, React Hook, JSON, Node.js, Ajax."  
       	  .Experience in all phase of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM. "
         .	Extensive knowledge in developing single - page applications (SPAs). 
           .	Working knowledge of Web protocols and standards (HTTP HTML5/XHTML/XHTML-MP, CSS3, Web Forms, XML, XML parsers)`
        },
           {
          id: "five-p-about",
          content: `
          Good experience on customizing CSS frameworks like Bootstrap and Foundation using CSS preprocessors LESS or SASS and Compass. 
          .	Implemented easy to use Bootstrap plugins for building carousel, accordion, modal windows etc. 
          .	Good Expertise in analyzing the Document Object Model (DOM) Layout, DOM Functions, and Java Script functions, Cascading Styles across cross-browser using Fire Bug, Developer Tool Bar. 
          .	Hands-on & up to date on new JS versions including ES5, ES6 & ES7 
          .	Experience with AWS tools and products including AWS EC2, S3 bucket, AWS Amplify. 
          .	Extensive experience in designing professional UI web applications using front-end technologies like HTML5, CSS3, JavaScript, React JS,  ES5, ES6, 
          .	Expertise in React JS framework to develop the SPA. 
          .	Experienced in React JS and working with React Flux architecture. 
          .	Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites. 
          .	Experience in using React JS components, Forms, Events, Keys, Router, plus Redux, Animations and Flux concept. 
          .	Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX concepts. 
          .	Familiar with creating Custom Reusable React Components Library.`
          
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-12">
                  
                    <div className="row">
                    <div className="title-box-2">
                        <h5 className="title-left mt-3">Skills</h5>
                      </div>
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
