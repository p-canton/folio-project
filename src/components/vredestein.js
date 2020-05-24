import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import VredesteinCar from './images/VredesteinCar.png';
import Frameworks from './images/Frameworks.png';
import PostiBox from './images/PostiBox.png';
import PostiAll from './images/PostiAll.jpg';
import SearchBWIcon from './images/SearchBWIcon.png';
import AnalysisIcon from './images/AnalysisIcon.png';
import PropoIcon from './images/PropoIcon.png';
import DemoIcon from './images/DemoIcon.png';
import TyreImage from './images/TyreImage.png';
import VredesteinVideo from './images/Vredestein.mp4';
import VredIcon from './images/VredIcon.png';

import ReactFullpage from "@fullpage/react-fullpage";
import LogoPC from './images/pcIconN.png';
import OnlineUserIcon from './images/OnlineUserIcon.png';
import EcoIcon from './images/EcoIcon.png';
import ECommersIcon from './images/E-commersIcon.png';

class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["black", "white", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonAD">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonAD">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/tekla">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/tekla">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#CCCCCC', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={VredIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"Vredestein brand management project"</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={VredesteinCar}/>
              <div className="textPadding" style={{paddingTop: '4vh'}}>
                <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                By renovating the communication strategy of <b>Vredestein</b> on the internet, the team aims to improve the brand position on the market. To make this
                transition possible, the team presented to the company two suggestions and the guidelines to make it possible. The first approach was to improve its
                presence in social media and redesign a new strategy. Some of the recommendations were to interconnect social media channels, develop their partnerships
                and increase the interaction with the costumers. The second solution was to redesign the website experience and bring a modern and more user-friendly
                interface. To demonstrate the last idea, the team designed a demo of the landing page should. </p>
              </div>
              <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom: '4vh'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                  <img src={Frameworks} style={{maxWidth: '100vh', width: '70%', height: 'auto', paddingTop: '2vh'}}/>
                  <p className="TextFont" style={{padding: '2em', paddingLeft: '2em', textAlign: 'center', color: '#BDBDBD'}}>Vredestein Frameworks</p></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#CE000C'}}><b>Brand proposition</b></h3>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      To bring a good brand proposition to Vredestein, the team needs to start searching for information and analyse it, going through all the stages of the
                      procedure. The first step was to understand the client desires and the get information of the market segment. To obtain this information, the team researched
                      to know the brand, the target customer segments and the current brand image of Vredestein. With this information, then the team will be able to conclude
                      suggestions for the new brand proposition.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                    After gathering all the information is needed to formulate the reframed brand proposition for Vredestein. The presented solution is to support Vredestein in expressing
                    its values of “freedom”, “innovation” and “premium” which the brand possesses, due to the current fail to communicate adequately. The reframed brand proposition, in both
                    the online as well as offline channels of Vredestein, is only useful if it is actively applied. To guarantee the best results, the team presented some strategies for
                    Vredestein social media channels. The final proposals, to communicate Vredesteins’ brand strengths, are aligned with the tone of voice and the goal.
                    </p>
                  </div>
                </div>
                </div>
                <div className="textPadding" style={{textAlign: 'center', paddingBottom: '2em'}}>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  For the development of the project, it was followed by some SWOT analysis to evaluate the Vredestein brand proposition. Thanks to this strategic planning technique,
                  the team was able to identify strengths, weaknesses, opportunities, and threats related to Vredestein branding. Below you can see the results obtained with the SWOT analysis:</p>
                  <div className = "ContGrid4-2" style={{color: 'black', backgroundColor: 'none', paddingTop: '4em'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <p style={{fontSize: '1em', color: '#CE000C', fontSize: '15vh', padding: '0.2em'}}><b>S</b></p>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Strengths</b></p>
                      <p style={{lineHeight: '80%'}}>Innovation</p>
                      <p style={{lineHeight: '80%'}}>Quality & Tradition</p>
                      <p style={{lineHeight: '80%'}}>Premium partnerships</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <p style={{fontSize: '1em', color: '#CE000C', fontSize: '15vh', padding: '0.2em'}}><b>W</b></p>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Weaknesses</b></p>
                      <p style={{lineHeight: '80%'}}>No clear online communication</p>
                      <p style={{lineHeight: '80%'}}>No consistency</p>
                      <p style={{lineHeight: '80%'}}>Website design</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <p style={{fontSize: '1em', color: '#CE000C', fontSize: '15vh', padding: '0.2em'}}><b>O</b></p>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Opportunities</b></p>
                      <p style={{lineHeight: '80%'}}>Niche Market: All season tyres</p>
                      <p style={{lineHeight: '80%'}}>Clearly communicate inovations</p>
                      <p style={{lineHeight: '80%'}}>Awards & partnerships</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <p style={{fontSize: '1em', color: '#CE000C', fontSize: '15vh', padding: '0.2em'}}><b>T</b></p>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Threats</b></p>
                      <p style={{lineHeight: '80%'}}>Too wide target audience</p>
                      <p style={{lineHeight: '80%'}}>Inconsistent brand communication</p>
                      <p style={{lineHeight: '80%'}}>Competitor entering niche</p>
                    </div>
                  </div>
                </div>
                <div style={{backgroundColor: 'black'}}>
                <img className="imageProject" src={TyreImage} />
                  <div style={{backgroundColor: 'black'}}><div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#CE000C'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>The project intended to teach the overall
                  process and practices of <b>brand management</b> of a company and reframe their brand proposition. Therefore, we needed to understand the brand, clients objective,
                  and the potential market. During this process, these are the following tools that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'white', backgroundColor: 'black'}}>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchBWIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Research</b></p>
                      <p style={{lineHeight: '80%'}}>Associative map</p>
                      <p style={{lineHeight: '80%'}}>Semi-structured interviews</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AnalysisIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Analysis</b></p>
                      <p style={{lineHeight: '80%'}}>Personas</p>
                      <p style={{lineHeight: '80%'}}>SOWT analysis</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={PropoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Proposition</b></p>
                      <p style={{lineHeight: '80%'}}>Frameworks</p>
                      <p style={{lineHeight: '80%'}}>Customer Journey</p>
                    </div>
                    <div style={{fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={DemoIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Demostration</b></p>
                      <p style={{lineHeight: '80%'}}>Social media guidelines</p>
                      <p style={{lineHeight: '80%'}}>Website redesign</p>
                    </div>
                  </div></div>
                    <div className="HidePC" style={{color: 'white', backgroundColor:'black', paddingBottom:'2vh', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Promotional video</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={VredesteinVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div className="HidePhone" style={{color: 'white', backgroundColor:'black', paddingBottom:'4vh', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'white', fontSize:'3vh'}}>Website video</p>
                      <video controls style={{width:'70%', borderRadius: '1em'}}>
                        <source src={VredesteinVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div style={{color: 'white', backgroundColor:'#black', paddingBottom:'4vh', textAlign: 'center'}}>
                      <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#CE000C'}}><b>Team Members</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'white'}}>
                      Naima Volz<b>-</b> Katariina Martikainen <b>-</b> Iris Fang <b>-</b> Giuseppe Veloce <b>-</b> Pablo Cantón
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
                <i class="fa fa-chevron-up fa-lg" style={{color: '#CE000C', fontSize:'3vh', padding: '1vh'}}></i>
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
