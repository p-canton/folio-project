import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";
import AdidasShop from './images/AdidasShop.jpeg';
import ImageAD from './images/imageAD.png';
import InfoIcon from './images/InfoIcon.png';
import TryIcon from './images/TryIcon.png';
import BuyIcon from './images/BuyIcon.png';

import ADmockup from './images/ADmockup.jpg';
import AdidasAll from './images/AdidasAll.jpg';
import ADicon from './images/ADicon.png';

import ReactIcon from './images/ReactIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AndroidIcon from './images/AndroidIcon.png';
import RasPiIcon from './images/RasPiIcon.png';
import EstimoteIcon from './images/EstimoteIcon.png';
import NFCIcon from './images/NFCIcon.png';
import PythonIcon from './images/PythonIcon.png';
import IBMIcon from './images/IBMIcon.png';


class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#272727", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pctechnical">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#8B0707', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pctechnical">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#8B0707', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/vredestein">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#8B0707', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/vredestein">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#8B0707', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={ADicon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"The IoT shop of the future"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={AdidasShop}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                In March of 2018, a team of four students participated in a 36h hackathon in Zaragoza, where the team developed <b>Adidas Shop</b>, an IoT
                solution that intends to changes <b>Adidas</b> customer experience at their shops. The solution aims to let the costumers have a first try
                of the product,  access to the products information and speed up the purchase process. With Adidas Shop, your customers have a new shopping
                experience and get the products they need without any worries!</p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                Adidas Shop is a brand-new IoT shop that provides you with the best experience. With this new customer service, you can browse items information quickly,
                try them, and buy the ones you like just going out of the store. These are the central features that Adidas Shop brings:</p>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={InfoIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Information</b></p>
                    <p>All the info about the product</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={TryIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Try it</b></p>
                    <p>Try it before buying it</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={BuyIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Purchase</b></p>
                    <p>Skip doing the queue to pay</p>
                  </div>
                </div>
              </div>
                <img className="imageProject" src={ADmockup} />
                <div style={{backgroundColor: '#272727'}}>
                  <div className = "ContGrid2" style={{color: 'black', backgroundColor:'#272727'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div>
                      <h3 style={{color: '#8B0707'}}><b>The hack</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                      The goal of the hackathon was to develop a demo to show all the potential of the idea. The work was divided into three different phases,
                      to guarantee the best result. The first step was to design a concept that  Adidas could benefit from and implements IoT. Once the team has a clear
                      path, the next step was to develop the app. My responsibility was to design and develop the front-end of the android app and give support to
                      developing the database with FireBase. Finally, the last step was to test the app for the demo and create a presentation; showing the benefit of our
                      idea and all the work that the team did during 36 hours.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                      The final result was an app that uses beacons, NFC, Bluetooth and connects to the cloud. With the NFC, Bluetooth, and beacons, were
                      used to engage costumers to walk around the shop purchasing the items they were interested and skip the queue. Thanks to the cloud, the
                      customer was able to see all the data of the products. Customers walk next to the item and can check at their phones the material,
                      popularity, recycling possibilities or share it. Finally, these new concepts allow trying Adidas product. The client needs to book the
                      item they want to try and get it from the locker installed at the shop. To show this at the demo, the team use a RasberyPi to represent
                      the locker and the interface.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>As a result of all this hard work,
                      the team end up winning the <b>1st place</b>.</p>
                      </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <img src={ImageAD} style={{maxWidth: '100vh', width: '65%', height: 'auto', paddingTop: '4vh'}}/></div>
                    </div>
                    </div>
                  <div style={{backgroundColor: '#272727'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#8B0707'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>The hackathon shows the team
                  how to handle situations where time is playing against us and manage team coordination. During this process, these are the following tools that
                  were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#272727', paddingTop: '3vh'}}>
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
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={RasPiIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>RaspberryPi</b></p>
                    </div>
                  </div><div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#272727'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={NFCIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>NFC+Bluetooth</b></p>
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
                    <div className="HidePhone"  style={{color: 'white', backgroundColor:'#272727', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>NED team</p>
                      <img src={AdidasAll} style={{width:'70%', borderRadius: '1em'}}/>
                    </div>
                    <div className="HidePC" style={{color: 'white', backgroundColor:'#272727', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>NED team</p>
                      <img src={AdidasAll} style={{width:'90%', borderRadius: '1em'}}/>
                    </div>
                    <div style={{color: 'white', paddingBottom:'4vh', textAlign: 'center'}}>
                      <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#8B0707'}}><b>Team Members</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                      Uriel Aizensztain <b>-</b> Pablo Cantón <b>-</b> Alberto Camporredondo <b>-</b> Marco Catalán
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
                <i class="fa fa-chevron-up fa-lg" style={{color: '#8B0707', fontSize:'3vh', padding: '1vh'}}></i>
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
