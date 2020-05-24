import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import NedapImage from './images/NedapImage.png';
import EliasImage from './images/EliasImage.png';
import UnisveImage from './images/UnisveImage.png';
import BoostidImage from './images/BoostidImage.png';
import ValueCanvas from './images/Ecosystem.png';
import InternalDev from './images/InternalDev.png';
import PostiImage from './images/PostiImage.png';
import BidComp from './images/BidComp.png';
import UnisveIcon from './images/UnisveIcon.png';

import IandEicon from './images/IandEicon.png';
import ReactFullpage from "@fullpage/react-fullpage";


class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["#FFFFEF", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'black', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonWK">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#56CAD8', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonWK">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#56CAD8', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pcwork">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#56CAD8', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pcwork">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#56CAD8', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={IandEicon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'black', paddingBottom: '4vh'}}>"The latest project I cooperate to improve the company market strategy."</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={NedapImage}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  After two years in my master in human-computer interaction and design, I could colaborate with diferents companies to imrpove their market strategy. I was able to work with big corporations, little
                  companies and create my own startup experience, so I decided to present some of the results of some projects. Thaks to these colaborations, I was able to imrpove my knowledge on how a busines works
                  and all the needed skills that a company requires to succes.
                </p>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src={ValueCanvas} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/>
                    <p className="TextFont" style={{paddingTop: '1em', textAlign: 'center', color: '#BDBDBD'}}>Dutch healthcare ecosystem</p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{textAlign: 'center', color: '#56CAD8'}}><b>New Market Segment</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      During this project, a team of five students have to define a product-market fit for DigiRate, a new rating software for hospitals developed by Nedap. The company provided the team
                      with all the needed information and the features of the product, used to generate the research questions. With all that information, some interviews and researching, the team decided
                      to focus on the general practitioners as the new market segment.
                    </p><br/>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      To bring more insight into Nedat, the team created a document that reflects all the work and added some suggestions to start the launch of the product. Some of the strategies and methods
                      shared with the company were the affinity Mapping, Value proposition Canvas, the definition of the products market fit and the journey map of user and costumers.
                    </p>
                  </div>
                </div>
              </div>
              <img className="imageProject" src={EliasImage}/>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'#FFFFEF', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#56CAD8'}}><b>Market Expansion</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      During this project, a team of four students have to design a strategy to launch the product of Elsa, an AI robot that helps kids to learn a new language, in a new market. The company provided
                      the team with all the needed information and the features of the product, used to find the product-market fit. With all that information, some interviews and researching, the team decided to
                      present a strategic expansion of 3 years. This go-to-market plan started on the North of Europe, and after consolidating their position in Europe, launch into China.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      To bring more insight into the company, the team created a document that reflects all the work and added some suggestions to start the launch into the new markets. Some of the strategies and
                      methods shared with the company were the market strategy, go market plan, risk analysis, internal development road, financial strategy and sales model. Inside the go-to-market plan, the team
                      has into consideration the geographical market, vertical market, product development, product development, sales, partnerships and marketing.
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src={InternalDev} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/>
                    <p className="TextFont" style={{paddingTop: '1em', textAlign: 'center', color: '#BDBDBD'}}>Internal development roadmap</p>
                  </div>
                </div>
              </div>
              <img className="imageProject" src={BoostidImage}/>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src={BidComp} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/>
                    <p className="TextFont" style={{paddingTop: '1em', textAlign: 'center', color: '#BDBDBD'}}>Competitors map</p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#56CAD8'}}><b>Startup Experience</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      During six months, a team of five students have to create and launch a new company. The team created Boostid, a financial application for micro-business that use AI to boost their business. The
                      team works harder together searching and interviewing until they find a common problem and passion in the project. With all that information and validating the idea, the team formulated the first
                      step that Boostid need to do to succeed. Boostid first realise was planned to be done at the Finnish market, getting advantage of more than 283000 micro-business inside of the country.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      To prepare the next step of the startup, the team created a document that reflects all the previous work. Also, attached some guidelines on the paper for the development of the business. Some of
                      the strategies and methods shared on the paper were the market strategy, go market plan, risk analysis, competence analysis, business canvas model, business value model, internal development road,
                      financial strategy and sales model. Inside the go-to-market plan, the team has into consideration the geographical market, vertical market, product development, product development, sales,
                      partnerships and marketing.
                    </p>
                  </div>
                </div>
              </div>
              <img className="imageProject" src={UnisveImage}/>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'#FFFFEF', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#56CAD8'}}><b>Company consultancy</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    During this project, a team of four students have to design a strategy to improve the business model of Uni.S.Ve, a little traditional architecture business from Venice. The company provided the team
                    with all the needed information and the current situation of the company, used to find the changes the company needs. With all that information, some interviews and researching, the team decided to
                    present a strategy focussed on three aspects of the company. The proposed modifications occurred at the company structure, improving the project management, and planning new business development.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    To bring more insight into the company, the team created a document that reflects all the work and added some suggestions to start the launch into the new markets. Some of the strategies and methods
                    shared with the company were Efficient managemnet methods, process enabling, structure modifications, supportive tools and plan vision. Other information that the team facilitated was a market strategy,
                    risk analysis, internal development road, partnerships, marketing, financial strategy and sales model.
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src={UnisveIcon} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/>
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
