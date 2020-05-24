import React, { Component } from 'react';
import LogoPC from './images/pcIcon.png';
import { Link } from 'react-router-dom';
import { Layout, Navigation, Content } from 'react-mdl';
import Work from './images/Work.png';
import Educo from './images/Educo.png';
import IandE from './images/IandE.png';
import Tekla from './images/Tekla.png';
import Posti from './images/Posti.png';
import HackathonGOC from './images/HackathonGOC.png';
import CodeWeek from './images/Codeweek.png';
import Adidas from './images/Adidas.png';
import BetsFriends from './images/BetsFriends.png';
import Vredestein from './images/Vredestein.png';
import PCdesign from './images/PCdesign.png';
import PCtechnical from './images/PCtechnical.png';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

class Landing extends Component {
  render() {
    return(
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["white", "white", "white"]}
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
                <div style={{paddingTop:'4vh', paddingBottom:'4vh'}}>
                <Link className="LinkStyle"  onClick={() => fullpageApi.moveTo(2, 0)}style={{paddingRight:'4vh'}}>
                  <p className="MainButton"style={{color: 'black', fontSize:'3vh'}}><b>Projects</b></p></Link>
                <Link className="LinkStyle" to="/PC-folio.github.io/projects" style={{paddingLeft:'4vh'}}>
                  <p className="MainButton"style={{color: 'black', fontSize:'3vh'}}>Resume</p></Link>
                  </div>
                </div>
              </div>
              <div className="section">
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/pcwork"><img className="ProjectPic" src={Work}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/hackathonEU"><img className="ProjectPic" src={Educo}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/posti"><img className="ProjectPic" src={Posti}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/betsFriends"><img className="ProjectPic" src={BetsFriends}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/hackathonGOC"><img className="ProjectPic" src={HackathonGOC}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/pcdesign"><img className="ProjectPic" src={PCdesign}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/pctechnical"><img className="ProjectPic" src={PCtechnical}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/hackathonAD"><img className="ProjectPic" src={Adidas}/></Link>
              </Navigation>

              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/vredestein"><img className="ProjectPic" src={Vredestein}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/tekla"><img className="ProjectPic" src={Tekla}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/hackathonWK"><img className="ProjectPic" src={CodeWeek}/></Link>
              </Navigation>
              <Navigation style={{display: 'inline'}}>
                  <Link to="/PC-folio.github.io/iande"><img className="ProjectPic" src={IandE}/></Link>
              </Navigation>

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

export default Landing;
