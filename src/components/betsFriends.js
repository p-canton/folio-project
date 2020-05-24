import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import BetsFriends from './images/BFscreens.jpg';
import BetsFriends2 from './images/BFscreens2.jpg';
import BFmockupMb from './images/BFmockupMb.png';
import BFicon from './images/BFicon.png';
import ReactFullpage from "@fullpage/react-fullpage";
import LogoPC from './images/pcIconN.png';
import BFBigScreen from './images/BFBigScreen.mp4';
import BFSmallScreen from './images/BFSmallScreen.mp4';
import PersonasIcon from './images/PersonasIcon.png';
import SketchIcon from './images/SketchIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AngularIcon from './images/AngularIcon.png';
import AllAgesIcon from './images/AllAgesIcon.png';
import WagerIcon from './images/WagerIcon.png';
import PrizesIcon from './images/PrizesIcon.png';
class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#00424f", "#00424f", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/posti">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#F35151', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/posti">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#F35151', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonGOC">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#F35151', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                  <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonGOC">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#F35151', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={BFicon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Betting between friends has nevermore been that easy."</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={BetsFriends2}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                Have you ever forgotten about a bet you made with a friend or has a friend of yours ever pretended to have forgotten about a bet just to get
                out of paying his dues? With our web application, you can easily keep track of your bets and hold your friends accountable. In one place you
                will have an overview of all the bets you currently have running and also be able to see popular bets other people are involved in and join them.</p>
              </div>
              <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#F35151'}}><b>User Grupo & Cases</b></h3>
              <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
              <div style={{fontSize: '1.5em', textAlign: 'center', color: 'white'}}>
                <img src={WagerIcon} style={{height: '15vh'}}/>
                <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Any wager</b></p>
                <p>Bet on any topic.</p>
              </div>
              <div style={{fontSize: '1.5em', textAlign: 'center', color: 'white'}}>
                <img src={AllAgesIcon} style={{height: '15vh'}}/>
                <p style={{fontSize: '1em', paddingTop: '1em'}}><b>All ages</b></p>
                <p>Anybody can bets.</p>
              </div>
              <div style={{fontSize: '1.5em', textAlign: 'center', color: 'white'}}>
                <img src={PrizesIcon} style={{height: '15vh'}}/>
                <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Infinite prizes</b></p>
                <p>Be creative with your bets.</p>
              </div>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{color: '#F35151'}}><b>Designs</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    Since the team decided to conduct the tests within a high-fidelity prototype to simulate a more realistic environment,
                    to set up a general view, we wireframe the main screens of the platform. During the process, we understood that designing
                    the platform for a  desktop was a more accessible alternative. Therefore we decided to start working on the phone version,
                    following the strategy of Mobile-First Design. It is necessary to remind that our main focus was to offer customer satisfaction
                    as the primary goal meaning that we never forgot about Customer-First strategy. The software used on this project to accomplish
                    the task of prototyping was Sketch. After iterating along the process by testing the mockup and polishing it, we ended up with the
                    prototype, as we can see in the images.
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                <img src={BFmockupMb} style={{maxWidth: '500vh', width: '90%', height: 'auto', paddingTop: '4vh'}}/></div>
                </div>
                </div>
                <div style={{backgroundColor: 'white'}}>
                  <img className="imageProject" src={BetsFriends} />
                  <div className="textPadding">
                  <h3 style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: '#F35151'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>For the project development, the
                  team follow the <b>design thinking process</b> introduced by Stanford University, which has five different stages: "Empathise", "Define", "Ideate",
                  "Prototype" and "Test". During this process, these are the following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'black', backgroundColor:'white', paddingTop: '3vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={PersonasIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Personas</b></p>
                      <p>User group and scenarios.</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SketchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Sketch</b></p>
                      <p>Prototyping and testing.</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={FireBaseIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>FireBase</b></p>
                      <p>Database and Loging.</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AngularIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Angular</b></p>
                      <p>Develop the website.</p>
                    </div>
                  </div>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom:'4vh'}}>
                    <div>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'black', fontSize:'3vh'}}>Website</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={BFBigScreen} type="video/mp4"/>
                      </video>
                    </div>
                    <div>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'black', fontSize:'3vh'}}>Phone</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={BFSmallScreen} type="video/mp4"/>
                      </video>
                    </div>
                  </div>
                  <div style={{color: 'white', paddingBottom:'4vh', textAlign: 'center'}}>
                    <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#F35151'}}><b>Team Members</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'black'}}>
                    Carolina Diess <b>-</b> Pablo Cantón <b>-</b> Mario López
                    </p>
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
                <i class="fa fa-chevron-up fa-lg" style={{color: '#F35151', fontSize:'3vh', padding: '1vh'}}></i>
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
