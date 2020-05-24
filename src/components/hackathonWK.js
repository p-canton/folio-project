import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import UWeekendAll from './images/UWeekendAll.jpg';
import UWeekendWin from './images/UWeekendWin.jpg';
import TechAdidas1 from './images/TechAdidas1.png';
import TechAdidas2 from './images/TechAdidas2.png';

import ADMphone from './images/ADMphone.png';

import ReactFullpage from "@fullpage/react-fullpage";
import ADMpayment from './images/ADMpayment.jpeg';
import ADMmockup from './images/ADMmockup.png';
import ADMaIcon from './images/ADMaIcon.png';
import ADMdIcon from './images/ADMdIcon.png';
import ADMmIcon from './images/ADMmIcon.png';

import KareTV from './images/KareTV.jpg';
import ADMIcon from './images/ADMIcon.png';

import ReactIcon from './images/ReactIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AndroidIcon from './images/AndroidIcon.png';
import KinetIcon from './images/KinetIcon.png';
import EstimoteIcon from './images/EstimoteIcon.png';
import BluetoothIcon from './images/BluetoothIcon.png';
import PythonIcon from './images/PythonIcon.png';
import IBMIcon from './images/IBMIcon.png';


class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#FF7171", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/tekla">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/tekla">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/iande">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/iande">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={ADMIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"The IoT shop of the future"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={ADMpayment}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  In May of 2017, a team of four students participated in a 48h hackathon in Madrid, where the team developed automatic distance machine <b>ADM</b>,
                  an android application solution that uses beacons together <b>IBM</b> cloud solution for the bank sector. The solution aims to let the costumers from
                  a bank entity have a personalised treatment,  managing queue appointments and modernise the ATM user experience. With ADM, your costumers have personal
                  financial management (PFM) and experience banking differently.
                </p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  ADM is a new tool that using the advantages that brings the beacons, IBM Watson and the cloud, aims to revolutionize the bank industry. With this new banking
                  tool, customers have personalized appointments, have an automated app interaction, and change the current ATMs services. These are the central features that
                  ADM brings:
                </p>
                <div className = "ContGrid3" style={{color: 'white'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMaIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Adjustability</b></p>
                    <p>Adapt your services to your preferences</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMdIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Distance</b></p>
                    <p>The app interface automnaticaly modifies</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ADMmIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Management</b></p>
                    <p>All your bank info is accessible from the app</p>
                  </div>
                </div>
              </div>
                <div style={{backgroundColor: '#FF7171'}}>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                          <h3 style={{color: '#FFAD00'}}><b>The hack</b></h3>
                          <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                          The goal of the hackathon was to develop a demo to show all the potential of the idea. The work was divided into three different phases, to
                          guarantee the best result. The first step was to design a concept that  Capgemini could benefit from and implementing the solutions in the bank
                          sector. Once the team has a clear path, the next step was to develop the android app. My responsibility was to design and develop the front-end
                          of the web app and give support to developing the database with FireBase. Finally, the last step was to test the app for the demo and create a
                          presentation; showing the benefit of our idea and all the work that the team did during 48 hours.
                          </p>
                        </div>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                        <img src={ADMmockup} style={{maxWidth: '100vh', width: '100%', height: 'auto', paddingTop: '4vh'}}/></div>
                      </div>
                    </div>
                    <div style={{color: 'black', backgroundColor:'white'}}>
                      <div className="textPadding">
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                          The final result was an Android app that applies the beacons technology and IBM Watson together into a cloud solution. The beacons were employed to
                          detect the customer location and change the app interface depending on the different scenarios. By implementing this adaptable interface, the goal is
                          to provide to the customer with a faster and simplistic experience. Meanwhile, ADM gives the client access to all their bank data on the cloud to have
                          control of it. The costumers can take money from the ATM immediately standing net to it, avoiding fiscal interaction or more secure. Meantime thanks to
                          app suggestions, the patients have instant feedback and help, developing their financial state. Finally, this helps to give more freedom to the clients
                          and better customer experience. The flexibility and real-time data of the applications, let the clients control their appointment with the bank, helping
                          to make the process much appealing for the customer and bank.
                        </p>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                        As a result of all this hard work, the team end up winning the <b>2nd place</b>.</p>
                      </div>
                      <img className="imageProject" src={ADMphone} />
                    </div>

                  <div style={{backgroundColor: '#FF7171'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#FFAD00'}}><b>Tools</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>For the team, this was the first hackathon
                  they participated. At this event, the team learned to implement new technologies and work as a team for the first time. During this process, these are the
                  following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#FF7171', paddingTop: '3vh'}}>
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
                  </div><div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#FF7171'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={BluetoothIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Bluetooth</b></p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={EstimoteIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Estimote</b></p>
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
                  <div className="HidePhone"  style={{color: 'white', backgroundColor:'#FF7171', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>NED team</p>
                    <img src={UWeekendWin} style={{width:'70%', borderRadius: '1em'}}/>
                  </div>
                  <div className="HidePC" style={{color: 'white', backgroundColor:'#FF7171', textAlign: 'center'}}>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>NED team</p>
                    <img src={UWeekendWin} style={{width:'90%', borderRadius: '1em'}}/>
                  </div>
                  <div style={{color: 'white', paddingBottom:'4vh', textAlign: 'center'}}>
                    <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '2vh',textAlign: 'center', color: '#FFAD00'}}><b>Team Members</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                    Victor Fernández <b>-</b> Pablo Cantón <b>-</b> Alberto Camporredondo <b>-</b> Marco Catalán
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
