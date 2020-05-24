import React, { Component } from 'react';
import { Tabs, Tab, Button} from 'react-mdl';
import LogoPC from './images/pcIcon.png';
import PabloPicture from './images/PabloPic1Copy.png';
import Philips from './images/PhilipsIcon.png';
import Everis from './images/EverisIcon.png';
import PCicon from './images/pcIcon.png';
import DocPDF from './Documents/PabloCanton-CV.pdf';
import UTicon from './images/UTicon.png';
import Aalto from './images/AaltoIcon.png';
import EITicon from './images/EITicon.png';
import UPMicon from './images/UPMicon.png';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


class Projects extends React.Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["white", "none", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section fp-auto-height">
                <div className = "MainFormat">
                <img src={LogoPC} style={{height: '28vh'}}/>
                <h1 className = "Tittle">UX / UI Designer</h1>
                <p className = "SubTittle">"Design it till you make it"</p>
                <div >
                  <p href="url" style={{display: 'inline'}}> <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
                      <i class="fa fa-envelope fa-lg" style={{color: 'black', fontSize:'3vh', padding: '1.5vh'}}></i></a></p>
                  <p style={{display: 'inline'}}><a className="LinkStyle" href="tel:+34676328005">
                      <i class="fa fa-phone fa-lg" style={{color: 'black', fontSize:'3vh', padding: '1.5vh'}}></i></a></p>
                  <p style={{display: 'inline'}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                      <i class="fa fa-linkedin fa-lg" style={{color: 'black', fontSize:'3vh', padding: '1.5vh'}}></i></a></p>
                  <p style={{display: 'inline'}}><a className="LinkStyle" href="https://github.com/p-canton">
                      <i class="fa fa-github fa-lg" style={{color: 'black', fontSize:'3vh', padding: '1.5vh'}}></i></a></p>
                </div>
                <div style={{paddingTop:'4vh', paddingBottom: '4vh'}}>
                <Link className="LinkStyle"  to="/PC-folio.github.io/" style={{paddingRight:'4vh'}}>
                  <p className="MainButton" style={{color: 'black', fontSize:'3vh'}}>Projects</p></Link>
                <Link className="LinkStyle" onClick={() => fullpageApi.moveTo(2, 0)} style={{paddingLeft:'4vh'}}>
                  <p className="MainButton"style={{color: 'black', fontSize:'3vh'}}><b>Resume</b></p></Link>
                  </div>
                </div>
              </div>
              <div className="section" >
                <div class="row">
                  <div class="columnLeft">
                      <img class="PabloPic" src={PabloPicture}/>
                      <div style={{textAlign: 'center'}}>
                      <h3 style={{color: 'black', fontSize:'2,5em'}}><b>Pablo Cantón</b></h3>
                        <p><a href={DocPDF} download="Pablo Cantón CV" style={{color: 'grey', fontSize:'1.5em',textDecoration: 'none'}}>
                        <i class="fa fa-arrow-circle-down fa-lg"></i>    Download Resume</a></p>
                      </div>
                  </div>
                  <div class="columnRight drop-shadow">
                  <i class="cor"></i>
                    <div class="BoxRight" >
                      <span>
                        <h3 className = "Tittle" style={{fontSize: '3em', textAlign: 'left', paddingLeft: '1em'}}><b>Hi !</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                        Nice to see you around here, I am Pablo Cantón, a  multidisciplinary <b>UX/UI Designer</b> from Spain born in the 95.
                        I  design and develop innovatively IT solutions focus on the user experience, aiming for a positive impact on society.
                        Considering my <Link className = "LinkStyle" to="/PC-folio.github.io/">background</Link> I am really comfortable using designing software or implement design process, also coding as
                        a backend or frontend. Keep scrolling for more information.
                        </p>
                        <h3 className = "Tittle" style={{color: 'black', fontSize:'2em', textAlign: 'center',}}>Experience</h3>
                        <div className = "ContGrid3" style={{paddingBottom: '1em'}}>
                          <a className= "DivHover" href="/PC-folio.github.io/pcwork">
                            <img src={Philips} style={{display: 'inline',height: '8vh'}}></img>
                            <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>UX Designer</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>6 months intern</p>
                            <div class="overlay">
                            <div><p>internship designing a digital dashboard to manage the team mood.</p>
                              <p><b>+ Info</b></p>
                            </div>
                            </div>
                          </a>
                          <a className= "DivHover" href="/PC-folio.github.io/pcwork">
                            <img src={Everis} style={{display: 'inline',height: '8vh'}}></img>
                            <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>CS Developer</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>1 year intern</p>
                            <div class="overlay">
                              <div><p> Internship managing the databases of the client, Grupo IFA.</p>
                                <p><b>+ Info</b></p>
                              </div>
                            </div>
                          </a>
                          <a className= "DivHover" href="/PC-folio.github.io/">
                            <img src={PCicon} style={{display: 'inline',height: '8vh'}}></img>
                            <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>Personal projects</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>4 years work</p>
                            <div class="overlay">
                            <div><p>The compilation of all the mininfull project that I have been involved.</p>
                              <p><b>+ Info</b></p>
                            </div>
                            </div>
                          </a>
                        </div>
                        <div style={{backgroundColor: '#0097a7'}}>
                        <div className = "ContGrid4-2" style={{color: 'white', padding: '1em', paddingTop: '2em'}}>
                          <div >
                            <p style={{fontSize: '1.5em'}}><b>UX Tools</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Invision / FlowMap</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Miro</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Optimizely</p></div>
                          <div>
                            <p style={{fontSize: '1.5em'}}><b>UI Tools</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>WebFlow</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Figma / Framer X</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Balsamiq</p></div>
                          <div>
                            <p style={{fontSize: '1.5em'}}><b>Front-end</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>JavaScript / HTML / CSS</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>React / npm / Material UI</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Android Studio / React Native</p></div>
                          <div>
                            <p style={{fontSize: '1.5em'}}><b>Back-end</b></p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Python / C / Java / R</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>Oracle SQL / SQL</p>
                            <p style={{fontSize: '1em', lineHeight: '80%'}}>FireBase / Google Developers</p></div>
                          </div>
                        </div>
                        <h3 className = "Tittle" style={{color: 'black', fontSize:'2em', textAlign: 'center'}}>Studies</h3>
                        <div className = "ContGrid4-2" style={{paddingBottom: '1em'}}>
                        <a className= "DivHover" href="https://masterschool.eitdigital.eu/programmes/innovation-entrepreneurship-minor/"><img src={EITicon} style={{display: 'inline',height: '8vh'}}></img>
                          <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>I&E</b></p>
                          <p style={{fontSize: '1em', lineHeight: '80%'}}>Minor</p>
                            <div class="overlay">
                              <div><p>Innovation and Entrepreneurship minor from the EIT digital Master School.</p>
                                <p><b>+ Info</b></p>
                              </div>
                            </div>
                          </a>
                        <a className= "DivHover" href="https://www.utwente.nl/en/education/master/programmes/interaction-technology/programme/eit-ict-labs-hmi/#second-year-programme-at-theuniversity-of-twente"><img src={UTicon} style={{display: 'inline',height: '8vh'}}></img>
                          <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>Intelligent Systems</b></p>
                          <p style={{fontSize: '1em', lineHeight: '80%'}}>Master</p>
                          <div class="overlay">
                            <div><p>The second year of HCI & Design master, focus on Intelligent Systems.</p>
                              <p><b>+ Info</b></p>
                            </div>
                          </div>
                        </a>
                        <a className= "DivHover" href="https://into.aalto.fi/display/eneitictinno/Human+Computer+Interaction+and+Design+2018-2020"><img src={Aalto} style={{display: 'inline',height: '8vh'}}></img>
                          <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>HCI & Design</b></p>
                          <p style={{fontSize: '1em', lineHeight: '80%'}}>Master</p>
                          <div class="overlay">
                            <div><p>The first year of Human-Computer Interaction and Design master from the EIT.</p>
                              <p><b>+ Info</b></p>
                            </div>
                          </div>
                        </a>
                        <a className= "DivHover" href="http://www.fi.upm.es/?id=gradoingenieriainformatica&idioma=english"><img src={UPMicon} style={{display: 'inline',height: '8vh'}}></img>
                          <p style={{fontSize: '1.5em', paddingTop: '0.5em'}}><b>Computer Engineering</b></p>
                          <p style={{fontSize: '1em', lineHeight: '80%'}}>Bachelor</p>
                          <div class="overlay">
                            <div><p>A 4-year bachelor degree at the Polytechnic University of Madrid.</p>
                              <p><b>+ Info</b></p>
                            </div>
                          </div>
                        </a>
                        </div>
                      </span>
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
                  <i class="fa fa-chevron-up fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}


export default Projects;







/*
<div className="ProjectTexPic" style={{paddingTop: '6.2em'}}>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/vredestein"><img className="ProjectPic" src={Vredestein}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/posti"><img className="ProjectPic" src={Posti}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/betsFriends"><img className="ProjectPic" src={BetsFriends}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/hackathonAD"><img className="ProjectPic" src={Adidas}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/hackathonGOC"><img className="ProjectPic" src={HackathonGOC}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/hackathonWK"><img className="ProjectPic" src={CodeWeek}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/pcdesign"><img className="ProjectPic" src={PCdesign}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/pctechnical"><img className="ProjectPic" src={PCtechnical}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/vredestein"><img className="ProjectPic" src={Vredestein}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/posti"><img className="ProjectPic" src={Posti}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/betsFriends"><img className="ProjectPic" src={BetsFriends}/></Link>
  </Navigation>
  <Navigation style={{display: 'inline'}}>
      <Link to="/PC-folio.github.io/hackathonAD"><img className="ProjectPic" src={Adidas}/></Link>
  </Navigation>
</div>
*/
