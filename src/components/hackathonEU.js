import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import EducoTab from './images/educoTab.png';
import Educo from './images/e-duco.mp4';

import ReactFullpage from "@fullpage/react-fullpage";
import EducoPC from './images/educoPC.png';
import EducoImage from './images/educoImage.png';
import StudIcon from './images/StudIcon.png';
import AccIcon from './images/AccIcon.png';
import PuzzleIcon from './images/PuzzleIcon.png';

import EducoArq from './images/educoArq.png';
import IconEduco from './images/IconEduco.png';

import ReactIcon from './images/ReactIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AIgoogleIcon from './images/AIgoogleIcon.png';
import AItranslIcon from './images/AItranslIcon.png';
import AIfaceIcon from './images/AIfaceIcon.png';
import AItextIcon from './images/AItextIcon.png';
import AIvoiceIcon from './images/AIvoiceIcon.png';
import WebRTCIcon from './images/WebRTCIcon.png';


class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#B9FACF", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'black', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pcwork">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pcwork">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/posti">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/posti">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={IconEduco} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'black', paddingBottom: '4vh'}}>"The missing piece for the education of tomorrow"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={EducoImage}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                In April of 2020, a team of five students participated in a 48h European hackathon, where the team developed <b>e-duco</b>, a web application solution that uses
                Google AI together with Firebase. The solution aims to let the students have personalised education,  helps teachers monitoring their students and use AI to improve
                student development. With e-duco, your teacher can support during the student learning, and using AI e-duco makes education accessible to everyone.</p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                E-duco is a new tool that using the advantages that brings the Firebase, Google AI and cloud, aims to revolutionize the education industry. With this new
                web application, students can have better communication with their teachers, have an education accessible to everyone, and helps teachers control the student
                learning process. These are the central features that e-duco brings:</p>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={StudIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Study drop-out</b></p>
                    <p>Help teachers to engage the student</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={AccIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Accessibility</b></p>
                    <p>Make classes accessible to all people</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={PuzzleIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Easy implementation</b></p>
                    <p>Bring a product ready to start to use it</p>
                  </div>
                </div>
              </div>
                <img className="imageProject" src={EducoPC} />
                <div style={{backgroundColor: '#B9FACF'}}>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <img src={EducoArq} style={{maxWidth: '100vh', width: '100%', height: 'auto', paddingTop: '4vh'}}/>
                      <p className="TextFont" style={{padding: '2em', paddingLeft: '2em', textAlign: 'center', color: '#BDBDBD'}}>Application architecture schema</p>
                      </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <h3 style={{color: '#FFAD00'}}><b>The hack</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                        The goal of the hackathon was to develop a demo to show all the potential of the idea. The work was divided into three different phases, to guarantee the
                        best result. The first step was to design a concept that brings a benefit to the educational sector and helps during the COVID-19 pandemic. Once the team
                        has a clear path, the next step was to develop the web app. My responsibility was to design and develop the front-end of the web app and give support to
                        developing the database with FireBase. Finally, the last step was to test the app for the demo and create a video presentation; showing the benefit of our
                        idea and all the work that the team did during 48 hours.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      The final solution uses Google AI to make the app more accessible to everyone and truck the student's performance. By utilising speech to text, text to speech
                      and real-time translation, the platform will be accessible to people with physical limitations and break the language barrier. Meanwhile, Peppe tracks the student
                      performance and create a historical record that the teacher can use to evaluate and help their students. The implementation of facial recognition and text sentiment
                      analyses, let the platform have a constant track of the student and teacher mood. With this feature, Peppe tries to help to reduce the dropout of the students from
                      schools and give them support. Meantime thanks to the facial recognition, the microphone of the call can be turned off and on, avoiding unnecessary interruptions.
                      Finally, the solutions try to bring more freedom to use the applications and be easy to install. That's why the platform is compatible with third-party applications
                      as an internal whiteboard, Microsoft office or google calendars. The flexibility and real-time data of the applications, let the teachers manage better their lectures,
                      helping to make classes more engaging for students.
                      </p><br/>
                      </div>
                    </div>
                    </div>
                    <div style={{color: 'black', backgroundColor:'white'}}>
                      <img className="imageProject" src={EducoTab} />
                    </div>

                  <div style={{backgroundColor: '#B9FACF'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '2vh',textAlign: 'center', color: '#FFAD00'}}><b>Tools</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>The hackathon shows the team
                  how to handle situations where we have to learn to develop a solution working from home and efficiently dive the tasks. During this process, these are the following
                  tools that were used by the team..</p></div>
                  <div className = "ContGrid4-2" style={{color: 'black', backgroundColor: '#B9FACF', paddingTop: '3vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ReactIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>React</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={FireBaseIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Firebase</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AIgoogleIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Google AI</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={WebRTCIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>WebRTC connection</b></p>
                    </div>
                  </div><div className = "ContGrid4-2" style={{color: 'black', backgroundColor: '#B9FACF'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AIvoiceIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Speech to text</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AItranslIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Transcript translation</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AIfaceIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Face emotion detection</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AItextIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Text to speech</b></p>
                    </div>
                  </div></div>
                  <div className="HidePC" style={{color: 'white', backgroundColor:'#B9FACF', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>App video</p>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={Educo} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="HidePhone" style={{color: 'white', backgroundColor:'#B9FACF', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'black', fontSize:'3vh'}}>App video</p>
                    <video controls style={{width:'70%', borderRadius: '1em'}}>
                      <source src={Educo} type="video/mp4"/>
                    </video>
                  </div>
                  <div style={{color: 'white', backgroundColor:'#B9FACF', paddingBottom:'4vh', textAlign: 'center'}}>
                    <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FFAD00'}}><b>Team Members</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'black'}}>
                    Uriel Aizensztain <b>-</b> Pablo Cantón <b>-</b> Alberto Camporredondo <b>-</b> Marco Catalán <b>-</b> Victor Fernández
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
export default Resume;
