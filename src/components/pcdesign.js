import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import AllBackgrounds from './images/AllBackgrounds.png';
import AllIcons from './images/AllIcons.png';
import PhoneWallpaper from './images/PhoneWallpaper.png';

import BetsFriends2 from './images/BFscreens2.jpg';
import BFmockupMb from './images/BFmockupMb.png';
import LogoPC from './images/LogoPCpage.png';
import LogoEduco from './images/LogoEduco.png';
import LogoNV from './images/LogoNV.png';
import LogoGV from './images/LogoGV.png';
import LogoUIN from './images/LogoUIN.png';
import LogoLdng from './images/LogoLdng.png';
import Island from './images/Island.jpg';

import PCcard from './images/PCcard.png';

import ReactFullpage from "@fullpage/react-fullpage";
import BoostID from './images/BOOSTID.mp4';
import ShareGo from './images/ShareGo.mp4';
import PersonasIcon from './images/PersonasIcon.png';
import SketchIcon from './images/SketchIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AngularIcon from './images/AngularIcon.png';
import AllAgesIcon from './images/AllAgesIcon.png';
import WagerIcon from './images/WagerIcon.png';
import PrizesIcon from './images/PrizesIcon.png';
import PCimageD from './images/PCimageD.jpg';
class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#0097a7", "#0097a7", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonGOC">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonGOC">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pctechnical">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                  <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pctechnical">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={LogoPC} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"The latest designs I had created."</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={PCimageD}/>
              <div style={{backgroundColor: 'white'}}>
              <p className="TextFont PaddingFix" style={{textAlign: 'justify', color: 'black', paddingTop: '4vh'}}>
                Despite my computer science background, creating and imagine new designs has catches my attention, being able to practice as a hobby. After years of learning
                different design techniques and abilities, and my master in human-computer interaction and design, these are the results of some personals projects.
                On the other hand, this website is a representation of all the designs that I can create.</p>
              <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Logos</b></h3>
              <div className = "ContGrid2" style={{color: 'white', paddingBottom: '2em'}}>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={PCcard} style={{maxWidth: '100vh', width: '60%', height: 'auto'}}/>
                </div>
                <div>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  <b>Pablo Cantón Logo</b></p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  Creating my logo was one of the first projects where I start to learn and understand better the importance and meaning of a good logo. In this particular case, my
                  logo tries to represent my name, my computer science background and my passion for design. The logo represents my name using the letter "P" as the principal shape
                  of the logo. Using the appearance of the hard drive disk is represents my IT knowledge. Finally, to show my design background, the logo uses the shape of a colour
                  palette. The business card is the representation of a possible real case. </p>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={LogoEduco} style={{maxWidth: '100vh', width: '50%', height: 'auto', padding: '2vh'}}/>
                </div>
                <div>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  <b>e-duco logo</b></p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  My last logo creation was e-Duco, a concept that I came with during a 48 European online hackathon to bring a solution for Covid-19. The final solution was an online
                  platform that makes distance education accessible to everyone, thanks to the application of AI. With this into mind, I designed the logo utilising the Latin word
                  related to education, ēducō, were "ē" means distance and "ducō" means conduct. Whit this concept the logo e-duco was created representing the online platform that
                  helps people to manage their education despite their location. By adding the braille icon, is express that the platform has universal accessibility. </p>
                </div>
              </div>
              <div className = "ContGrid4-2" style={{color: 'white', paddingBottom: '2em'}}>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={LogoNV} style={{height: '15vh'}}/>
                  <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Natural Value</b></p>
                  <p>Sketching a logo that represents nature.</p>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={LogoLdng} style={{height: '15vh'}}/>
                  <p style={{fontSize: '1em', paddingTop: '1em'}}><b>L..D.NG</b></p>
                  <p>Testing with symbolic shapes and icons.</p>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={LogoUIN} style={{height: '15vh'}}/>
                  <p style={{fontSize: '1em', paddingTop: '1em'}}><b>UIN</b></p>
                  <p>The union of the user, innovation, and nature.</p>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={LogoGV} style={{height: '15vh'}}/>
                  <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Giuseppe Veloce</b></p>
                  <p>Personal logo designed for a friend.</p>
                </div>
              </div>
              <div style={{backgroundColor: 'white'}}>
                <img className="imageProject" src={AllBackgrounds} />
                <div>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'none'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="HidePhone">
                    <img src={PhoneWallpaper} style={{maxWidth: '100vh', width: '65%', height: 'auto', paddingTop: '4vh'}}/>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Wallpapers</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  One of the design experiences that I develop in parallel from my studies is the creation of wallpaper or illustrations. To practice my designing skills and learn to use new tools,
                  I started to design personalised wallpapers inspired on famous TV shows or movies. The website contains some of the final designs I created.
                  </p>
                  <div className="HidePC" style={{textAlign: 'center', justifyContent: 'center'}}>
                  <img src={PhoneWallpaper} style={{maxWidth: '100vh', width: '65%', height: 'auto', paddingTop: '2vh', textAlign: 'center'}}/></div>
                  <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Icons</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  Finding the correct icon is not as easy as some can think! Because of that reason, I began to design my icons to have the freedom to adapt them to any situation. At the same time,
                  creating figures helps to improve my designing skills and put into practice my imagination. One of the main problems I have to face was the ability to create icons that everyone
                  understands and identify quickly.</p></div>
                  </div>
                  </div>
                </div>
                <img className="imageProject" src={AllIcons} />
              </div>
              </div>
                <div className="textPadding">
                  <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Recopilation</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                  Finally, I will like to show some other experiences and abilities that I had to develop inside the designing field, and I am looking forward to keeping practising on.
                  </p>
                </div>
                <div className = "ContGrid2" style={{color: 'black', paddingBottom:'4vh'}}>
                  <div>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Mockup Experience</p>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={ShareGo} type="video/mp4"/>
                    </video>
                  </div>
                  <div>
                    <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Video editing</p>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={BoostID} type="video/mp4"/>
                    </video>
                  </div>
                </div>
                <div className="textPadding" style={{paddingBottom: '4vh'}}>
                  <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}><b>Photography</b></p>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className="imageProject HidePhone" src={Island} style={{width:'95%', borderRadius: '1em',textAlign: 'center', maxHeight: '50vh'}}/>
                  <img className="imageProject HidePC" src={Island} style={{width:'90%', borderRadius: '1em',textAlign: 'center', maxHeight: '20vh'}}/></div>
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
