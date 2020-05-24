import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import UWeekendHack from './images/UWeekendHack.jpg';
import GOCAll from './images/GOCAll.jpg';
import UWeekendWin from './images/UWeekendWin.jpg';
import KareVideo from './images/Kare.mp4';

import ReactFullpage from "@fullpage/react-fullpage";
import DoctorKare from './images/DoctorKare.jpg';
import KareAI from './images/KareAI.png';
import InfCloudIcon from './images/InfCloudIcon.png';
import AIIcon from './images/AIIcon.png';
import RecoIcon from './images/RecoIcon.png';

import KareTV from './images/KareTV.jpg';
import KareIcon from './images/KareIcon.png';

import ReactIcon from './images/ReactIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AndroidIcon from './images/AndroidIcon.png';
import KinetIcon from './images/KinetIcon.png';
import DevonfwIcon from './images/DevonfwIcon.png';
import NFCIcon from './images/NFCIcon.png';
import PythonIcon from './images/PythonIcon.png';
import IBMIcon from './images/IBMIcon.png';


class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#67B9D0", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/betsFriends">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/betsFriends">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pcdesign">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pcdesign">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={KareIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"The IoT shop of the future"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={DoctorKare}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                In Movember of 2017, a team of five students participated in a 12h national hackathon in Spain, where the team developed <b>K-are</b>, a
                web application solution that uses a Kinet together <b>IBM</b>, and <b>Capgemini</b> clouds solutions. The solution aims to let the patients
                have a personalised treatment,  helps doctors monitoring their patient's and use AI to improve the recovery. With K-are, your doctors can support
                during the patient's treatment, and using AI K-are can help the patients during the recovery.</p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                K-are is a new tool that using the advantages that brings the Kinet, AI and cloud, aims to revolutionize the health industry. With this new heath tool,
                patients can contact faster with their doctors, avoid to saturate hospitals, and helps doctors control the recovery process. These are the central features
                that K-are brings:</p>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={InfCloudIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Information</b></p>
                    <p>All the info accesible to the doctors</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={AIIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Artificial Intelligent</b></p>
                    <p>Support patients with IBM Watson</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={RecoIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Recovery</b></p>
                    <p>A tool to support patients healing</p>
                  </div>
                </div>
              </div>
                <img className="imageProject" src={KareTV} />
                <div style={{backgroundColor: '#67B9D0'}}>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <img src={KareAI} style={{maxWidth: '100vh', width: '100%', height: 'auto', paddingTop: '4vh'}}/></div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <h3 style={{color: '#FFAD00'}}><b>The hack</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      The goal of the hackathon was to develop a demo to show all the potential of the idea. The work was divided into three different phases,
                      to guarantee the best result. The first step was to design a concept that  IBM and Capgemini could benefit from and implementing both cloud
                      solutions. Once the team has a clear path, the next step was to develop the web app. My responsibility was to design and develop the front-end of
                      the web app and give support to developing the database with FireBase. Finally, the last step was to test the app for the demo and create a
                      presentation; showing the benefit of our idea and all the work that the team did during 12 hours.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      The final result was a web app that uses the Xbox Kinet, IBM Watson, and Devonfw from Capgemini; all connect through the cloud. The Kinet was employed
                      to register the patient's movements and create a virtual skeleton of the patients. This virtual skeleton can be trackable and used to interact with the
                      web app. Having all the data on the cloud helps the doctors and clients to follow up on the process of the recovery. Using K-are platform, patients can
                      follow the recovery exercises that the doctor recommend to take. Meantime thanks to AI, the patients could have instant feedback and recommendations,
                      helping to the recovery process. Finally, these new concepts improve communication between doctors and patients. The flexibility of the applications let
                      the patients communicate with the doctors from home, helping to avoid the saturation of the hospitals.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      As a result of all this hard work, the team end up winning the <b>1st place</b>.</p>
                      </div>
                    </div>
                    </div>
                    <img className="imageProject" src={GOCAll} />
                  <div style={{backgroundColor: '#67B9D0'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FFAD00'}}><b>Tools</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>The hackathon shows the team
                  how to handle situations where we have to learn to develop a solution with new technology and efficiently dive the tasks. During this process,
                  these are the following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#67B9D0', paddingTop: '3vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ReactIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>React</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ReactIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>React Native</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={FireBaseIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Firebase</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AndroidIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Android</b></p>
                    </div>
                  </div><div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#67B9D0'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={KinetIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Kinet</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={DevonfwIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>devonfw</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={PythonIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Python</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={IBMIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>IBM Cloud</b></p>
                    </div>
                  </div></div>
                  <div className="HidePC" style={{color: 'white', backgroundColor:'#67B9D0', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>App video</p>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={KareVideo} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="HidePhone" style={{color: 'white', backgroundColor:'#67B9D0', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>App video</p>
                    <video controls style={{width:'70%', borderRadius: '1em'}}>
                      <source src={KareVideo} type="video/mp4"/>
                    </video>
                  </div>
                  <div style={{color: 'white', backgroundColor:'#67B9D0', paddingBottom:'4vh', textAlign: 'center'}}>
                    <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FFAD00'}}><b>Team Members</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                    Pablo Cantón <b>-</b> Alberto Camporredondo <b>-</b> Marco Catalán <b>-</b> Victor Fernández
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
