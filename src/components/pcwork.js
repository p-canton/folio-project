import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import PhilipsImage from './images/PhilipsImage.png';
import PhilipsBrush from './images/PhilipsBrush.png';
import IfaImage from './images/IfaImage.png';
import PostiAll from './images/PostiAll.jpg';
import SearchIcon from './images/SearchIcon.png';
import SlushImage from './images/SlushImage.png';
import ValidationIcon from './images/ValidateIcon.png';
import DDBBifa from './images/DDBBifa.png';
import MoodMock from './images/MoodMock.png';
import EverisImage from './images/EverisImage.png';
import TriitVideo from './images/TriitV.mp4';

import WorkIcon from './images/WorkIcon.png';
import ReactFullpage from "@fullpage/react-fullpage";
import LogoPC from './images/pcIconN.png';

import OnlineUserIcon from './images/OnlineUserIcon.png';
import EcoIcon from './images/EcoIcon.png';
import ECommersIcon from './images/E-commersIcon.png';

class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#9DBDE3", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/iande">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#006A78', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/iande">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#006A78', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonEU">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#006A78', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonEU">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#006A78', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={WorkIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Work"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={PhilipsImage}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                On February of 2020, I started my internship as a UX Designer at <a className = "LinkStyle" href="https://www.philips.com/global">Philips</a> based in Amsterdam. Currently, I am involved in
                two different projects inside the design department of Philips Amsterdam and Eindhoven. In both projects, I make use of my technical background as a Computer Engineer, while I use my designing skills
                to design a new idea and better user experience. The main objective of the projects consists of development ideas that the design department of Philips can use for a future project or inside their team
                management.</p>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={PhilipsBrush} style={{maxWidth: '100vh', width: '40%', height: 'auto', paddingTop: '2vh'}}/></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#006A78'}}><b>UX Designer</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    <b>Haptic feedback</b></p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      At the design department of Philips, they have to work on the ideation and design of a new product every year. But unfortunately for some designer need support from the technical department to try
                      their new ideas. To solve this problem, I collaborated in a project that its goal is to design a device that helps the designer to work with haptic feedback and don't need help from the technical
                      department. Using an Arduino and a vibration motor, the team is working on creating a platform where the designer can test the different haptic responses avoiding to use the code o create the circuit.
                    </p>
                  </div>
                </div>
                </div>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '2em'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      <b>Mood dashboard</b></p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                        Starting my internship, the company offers me an individual project where I have to ideate and prototype a solution to track and display the mood of the team. To develop the idea, I started with
                        research, interviews and workshop, to end un with an interactive mood dashboard concept. Currently, I am working at the testing of the first low fidelity prototype and finding the possible improvements.
                        With the outcome, I will start to develop the first high fidelity prototype with React Native. The main goal to solve with this project is to find the most suitable solution to obtain the mood of the
                        people and create an interface that is user friendly and puss people to keep using the tool.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={MoodMock} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '4vh'}}/></div>
                  </div>
                  </div>
                <img className="imageProject" src={EverisImage} />
                <div className="textPadding" style={{paddingTop: '4vh'}}>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  Working at <a className = "LinkStyle" href="https://www.everis.com/global/en">Everis</a> headquarters in Spain, from September of 2017 to July of 2018, was my first job experiences as
                  a Computer Science developer. I started at the company as an Intern and being able to work with them until I decided to start my new master abroad. During this
                  period, I was designate to work with <a className = "LinkStyle" href="https://www.grupoifa.com/en/index.html">Grupo IFA</a>, one of their clients that have a strong
                  position in the retail market in Spain. The main objective of the project consists of migrating all the data of their currents database and combine it in
                  a web application with its suppliers and associates database.</p>
                </div>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#006A78'}}><b>Computer Science developer</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      <b>Front-end</b></p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      For the front-end, my main task was to create the new interface that Grupo IFA will use to organise the suppliers and associates communications. To develop the
                      user interface, the team created low and high fidelity prototypes, test them, and make the changes that the client needs. Them developing with JavaScrip, HTML and
                      CSS, I created the screen, and submit the final resolution. To guarantee the best result, after the development of each phase, the team conducted a usability testing
                      to make the last changes to the web application.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={IfaImage} style={{maxWidth: '100vh', width: '60%', height: 'auto', paddingTop: '4vh'}}/></div>
                  </div>
                  </div>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '2em'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <img src={DDBBifa} style={{maxWidth: '100vh', width: '70%', height: 'auto', paddingTop: '4vh'}}/>
                      </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                        <b>Back-end</b></p>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                        For the back-end, my main task was to migrate all the internal data fo the company into a new Oracle database, cleaning from all the information that was
                        irrelevant for the new interface. Meantime, I was in charge to merge the old information with the new one or create SQL functions, for the interaction of the
                        users with the data, guarantee the security credential and data recovery. Finally, to display the tables and the information, I make use of javascript and
                        Oracle web development interface to connect the web app with the client database.
                        </p>
                      </div>
                    </div>
                  </div>
                <div style={{backgroundColor: '#9DBDE3'}}>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'#9DBDE3', paddingBottom: '2em'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <img src={SlushImage} style={{maxWidth: '100vh', width: '55%', height: 'auto', paddingTop: '4vh'}}/>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#006A78'}}><b>Slush</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      <a className = "LinkStyle" href="https://www.slush.org/">Slush</a> is a not-for-profit event that takes place in Helsinki, with the purpose of help startups or
                      new technologies to facilitate meetings with investors and create a worldwide startup community. During these days, I was assigned with some task to help the crew and
                      have some freedom to visit enjoy the event and visit the different pieces. I decided to join as a volunteer because since I started my bachelor, I was interested in
                      technology and the world of the startups. For that reason, I decided to enrol as a volunteer and has de opportunity to experience this huge opportunity, and have new
                      connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="section fp-auto-height" style={{textAlign: "center"}}>
                <p className = "SubTittle" style={{paddingTop: '4vh', fontSize:'3vh'}}>Feel free to contact:</p>
                <div className = "ContGrid4-1" style={{borderRadius: '2em'}}>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}> <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
                  <i class="fa fa-envelope fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>pablocg1995@gmail.com</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="tel:+34676328005">
                  <i class="fa fa-phone fa-lg" style={{color: '#0097a7 ', fontSize:'3vh', padding:'1vh'}}></i>+34 676 32 80 05</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                  <i class="fa fa-linkedin fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>linkedin.com/p-canton</a></p></div>
                <div>
                  <p class="ButtonLine" style={{textAlign: "center"}}><a className="LinkStyle" href="https://github.com/p-canton">
                  <i class="fa fa-github fa-lg" style={{color: '#0097a7', fontSize:'3vh', padding:'1vh'}}></i>github.com/p-canton</a></p></div>
                </div>
                <button onClick={() => fullpageApi.moveTo(1, 0)} style={{background: 'none', border: 'none', padding: '1vh'}}>
                <i class="fa fa-chevron-up fa-lg" style={{color: '#006A78', fontSize:'3vh', padding: '1vh'}}></i>
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
  }
export default Resume;
