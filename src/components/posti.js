import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import PostiLock from './images/PostiLock.jpg';
import PostiMock from './images/PostiMock.png';
import PostiBox from './images/PostiBox.png';
import PostiAll from './images/PostiAll.jpg';
import SearchIcon from './images/SearchIcon.png';
import IdeaIcon from './images/IdeaIcon.png';
import ValidationIcon from './images/ValidateIcon.png';
import ProtoIcon from './images/ProtoIcon.png';
import TriitIcon from './images/TriitIcon.png';
import PostiImage from './images/PostiImage.png';
import TriitVideo from './images/TriitV.mp4';

import PostiIcon from './images/PostiIcon.png';
import ReactFullpage from "@fullpage/react-fullpage";
import LogoPC from './images/pcIconN.png';

import PS1 from './images/PS1.png';
import PS2 from './images/PS2.png';
import PS3 from './images/PS3.png';
import PS4 from './images/PS4.png';
import OnlineUserIcon from './images/OnlineUserIcon.png';
import EcoIcon from './images/EcoIcon.png';
import ECommersIcon from './images/E-commersIcon.png';

class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#FF8000", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonEU">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonEU">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/betsFriends">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/betsFriends">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={PostiIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Developing a new IT service for Posti"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={PostiLock}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                By redesigning how we deliver e-commerce products, the team together with <b>Vincit</b> created TRIIT bags for the Finnish postal company <b>Posti</b>. TRIIT bags aims to
                reduce the hassle of returning parcels, and the issue of packaging waste builds up. With TRIIT bags, your customers can shop more and
                get the products they need without any worries!</p>
              </div>
              <div className="textPadding" style={{textAlign: 'center'}}>
                <img src={TriitIcon} style={{height: '10vh', paddingBottom: '4vh', paddingTop: '2vh'}}/>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                TRIIT is a brand-new online-shopping platform that provides you the best experience. With "Try with Posti", you can browse items easily,
                order them, and return the ones you don't like with just one click. These are the central features that TRIIT brings:</p>
                <div className = "ContGrid3" style={{color: 'white', paddingBottom: '2em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={OnlineUserIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Easy</b></p>
                    <p>Returns are more comfortable</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={EcoIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Sustainable</b></p>
                    <p>None packaging waste</p>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <img src={ECommersIcon} style={{height: '15vh'}}/>
                    <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Value</b></p>
                    <p>Better image for E-Commerce</p>
                  </div>
                </div>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={PostiMock} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF8000'}}><b>TRIIT app</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      Our TRIIT mobile and web app provide the best user experience. It is easy and convenient to navigate within. Swiping left for not liking an item,
                      right for liking it, up for more detail information and down for tracking the item. Just a few taps and your item will be on the way
                      to you!
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    Don't want to register on the app? Want to try it first instead? Sure! Experience our solution as a guest without the need of
                    logging in or filling in any information. You will have the chance to try our online shopping, and in addition, you get to try it for free for
                    the first time. Just click to explore more.
                    </p>
                  </div>
                </div>
                </div>
                <img className="imageProject" src={PostiImage} />
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF8000'}}><b>Smart Bag</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      Our Smart Bag is a specially designed box which can be adjusted according to the size of items and delivered directly to your door.
                      Just have our frame installed on your wall and you will be able to enjoy this wonderful service - pick up the bag right in front of
                      your home! Book the installation now and our Posti man will get everything done for you!
                      </p>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#FF8000'}}><b>Returns</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      Don't like the item? Don't worry, we will solve the problem for you. With our app and smart bag, you can simply return the item back
                      with one click and just leave it on the wall. Our Posti man will then get it and handle everything for you! This is our contribution to a
                      more sustainable environment.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={PostiBox} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '4vh'}}/></div>
                  </div>
                  </div>
                <div style={{backgroundColor: 'white'}}>
                  <div style={{backgroundColor: '#FF8000'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: 'white'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>The project intended to teach the
                  overall process and practices of <b>user-centred design</b> of digital products and services. Therefore, we needed to start designing them from scratch
                  going through all the stages of the procedure. During this process, these are the following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: '#FF8000', paddingTop: '3vh'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Problem</b></p>
                      <p style={{lineHeight: '80%'}}>Research</p>
                      <p style={{lineHeight: '80%'}}>Semi-structured interviews</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={IdeaIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Ideation</b></p>
                      <p style={{lineHeight: '80%'}}>6-5-3 Brainwriting</p>
                      <p style={{lineHeight: '80%'}}>Ruber Ducking</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ValidationIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Validation</b></p>
                      <p style={{lineHeight: '80%'}}>7 dots validation method</p>
                      <p style={{lineHeight: '80%'}}>Reviewing + Story board</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ProtoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Prototype</b></p>
                      <p style={{lineHeight: '80%'}}>Sketch</p>
                      <p style={{lineHeight: '80%'}}>Physical Models</p>
                    </div>
                  </div></div>
                    <div className="HidePC" style={{color: 'white', backgroundColor:'#FF8000', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Promotional video</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={TriitVideo} type="video/mp4"/>
                      </video>
                      <div style={{color: 'white', paddingBottom:'4vh', backgroundColor:'#FF8000',textAlign: 'center'}}>
                        <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: 'white'}}><b>Team Members</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                        Rongjun Ma <b>-</b> Andreas Hitz <b>-</b> Jani Luukko <b>-</b> Pablo Cantón <b>-</b> Waliyah Sahqani
                        </p>
                      </div>
                    </div>
                    <div className="HidePhone" style={{color: 'white', backgroundColor:'#FF8000', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Promotional video</p>
                      <video controls style={{width:'70%', borderRadius: '1em'}}>
                        <source src={TriitVideo} type="video/mp4"/>
                      </video>
                      <div style={{color: 'white', paddingBottom:'4vh', backgroundColor:'#FF8000',textAlign: 'center'}}>
                        <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: 'white'}}><b>Team Members</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                        Rongjun Ma <b>-</b> Andreas Hitz <b>-</b> Jani Luukko <b>-</b> Pablo Cantón <b>-</b> Waliyah Sahqani
                        </p>
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
                <i class="fa fa-chevron-up fa-lg" style={{color: '#FF8000', fontSize:'3vh', padding: '1vh'}}></i>
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
