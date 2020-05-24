import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import TeklaMockup from './images/TeklaMockup.jpg';
import TeklaMac1 from './images/TeklaMac1.png';
import TeklaMac2 from './images/TeklaMac2.png';
import PostiBox from './images/PostiBox.png';
import PostiAll from './images/PostiAll.jpg';
import SearchIcon from './images/SearchIconT.png';
import EvalIcon from './images/EvalIcon.png';
import ValidationIcon from './images/ValidateIconT.png';
import AnalysisIcon from './images/AnalysisIconT.png';
import PosterTekla from './images/PosterTekla.png';
import TeklaVideo from './images/Tekla.mp4';

import TeklaIcon from './images/TeklaIcon.png';
import ReactFullpage from "@fullpage/react-fullpage";
import LogoPC from './images/pcIconN.png';



class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["white", "#EADEEE", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'black', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/vredestein">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#B20911', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/vredestein">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#B20911', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonWK">
                    <p style={{color: 'black', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#B20911', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonWK">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#B20911', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={TeklaIcon} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'black', paddingBottom: '4vh'}}>"Usability evaluation for Trimble building information modelling software"</p>
                  </div>
                </div>
              <div className="section" style={{backgroundColor:'none'}}>
                <img className="imageProject" src={TeklaMockup}/>
                <div className="textPadding" style={{textAlign: 'center', paddingTop: '4vh', backgroundColor:'none'}}>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  The company Trimble was developing a new update of their building information modelling software Tekla structures. One of the central innovations of the new
                  products was a redesign of the interface. After adding all these changes, the Trimble group a team of four students to develop the first usability evaluation
                  of the final product. After research and meeting with the Tekla structure team behind the update, the team focus on three research questions:</p>
                  <ol className="TextFont" style={{paddingRight: '2em', paddingLeft: '4em', textAlign: 'justify', color: 'black'}}>
                    <li style={{lineHeight: '150%'}}>Are new users able to use the software for the first time?</li>
                    <li style={{lineHeight: '150%'}}>How the user manage to work and create 2d and 3d views of a structure?</li>
                    <li style={{lineHeight: '150%'}}>Do users user struggle with the new user interface?</li>
                  </ol>
                </div><div>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'none', paddingBottom: '4vh'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <img src={TeklaMac1} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#B20911'}}><b>Expert evaluation</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      The first step before starting with the usability evaluations is to understand and familiarised with the software the team have to evaluate. To make this measure
                      possible, the team determines to take a walk thought the software and identify potential pain points. Once the team understand better the tool, each member proceeded
                      to go through a series of task, doing a Heuristic evaluation of them. The way we evaluate each task was between 0-5, where 0 was none usability problem at all, and
                      5 means not being able to complete the job due to usability problems.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      With the information of the research and the expert evaluation, the next step was to design the user testing. Our participant recruitment, focus on student or freelances
                      that are beginners using Tekla structures software. With this condition, the team prepare the evaluation for a user that has limited experience with these tools.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <h3 style={{paddingTop: '1em',textAlign: 'center', color: '#B20911'}}><b>Empirical evaluation</b></h3>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      For the empirical evaluation, the team recruited eight participants that participated in the one-hour usability evaluation process designed by the team. The evaluation
                      consisted of two semi-structured interview, five different tasks, that emulate the real use of Tekla structure software, and a SUS and EUQ surveys. To evaluate the outcome
                      of the five tasks, the team used the metric of the total time needed, number of clicks, number of errors, percentage of accomplishment and ask the participant to think out loud.
                      </p>
                      <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify'}}>
                      With all the obtained information after the study, the following step is to evaluate the results and clean the data information. After understanding then data, the team was
                      able to extract the main points that Tekla structure needs to improve on. Finally, the team created a document for the client, adding the conclusions and all the raw information.
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div><img src={TeklaMac2} style={{maxWidth: '100vh', width: '80%', height: 'auto', paddingTop: '2vh'}}/>
                  </div>
                </div>
                </div>
                </div>
                <img className="imageProject" src={PosterTekla} />
                <div style={{backgroundcolor: '#EADEEE'}}>
                  <div style={{backgroundcolor: '#EADEEE'}}>
                  <div className="textPadding">
                  <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#B20911'}}><b>Process</b></h3>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>The project intended to teach the overall process
                  and practices of a <b>Usability evaluation</b> of a digital product. Therefore, we needed to start planning the evaluation process and go through all the stages
                  of the procedure. During this process, these are the following methods that were used by the team.</p></div>
                  <div className = "ContGrid4-2" style={{color: 'black', backgroundcolor: '#EADEEE', paddingTop: '3vh'}}>
                    <div style={{color: 'black',fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={AnalysisIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Expert evaluation</b></p>
                      <p style={{lineHeight: '80%'}}>Walkthrough</p>
                      <p style={{lineHeight: '80%'}}>Heuristic evaluation</p>
                    </div>
                    <div style={{color: 'black',fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={SearchIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Research focus</b></p>
                      <p style={{lineHeight: '80%'}}>Narrow down scope</p>
                      <p style={{lineHeight: '80%'}}>Adjust Research question</p>
                    </div>
                    <div style={{color: 'black',fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={ValidationIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Testing</b></p>
                      <p style={{lineHeight: '80%'}}>Think aloud</p>
                      <p style={{lineHeight: '80%'}}>SUS & UEQ questionnaire</p>
                    </div>
                    <div style={{color: 'black',fontSize: '1.5em', textAlign: 'center'}}>
                      <img src={EvalIcon} style={{height: '10vh'}}/>
                      <p style={{fontSize: '1em', paddingTop: '1em'}}><b>Evaluation</b></p>
                      <p style={{lineHeight: '80%'}}>Extracting findings</p>
                      <p style={{lineHeight: '80%'}}>Imporvement proposition</p>
                    </div>
                  </div></div>
                    <div className="HidePC" style={{color: 'black', backgroundColor:'#EADEEE', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'black', fontSize:'3vh'}}>Video</p>
                      <video controls style={{width:'90%', borderRadius: '1em'}}>
                        <source src={TeklaVideo} type="video/mp4"/>
                      </video>
                      <div style={{color: 'black', paddingBottom:'4vh', backgroundColor:'#EADEEE',textAlign: 'center'}}>
                        <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: 'black'}}><b>Team Members</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'black'}}>
                        Rongjun Ma <b>-</b> Andreas Hitz <b>-</b> Jani Luukko <b>-</b> Pablo Cantón <b>-</b> Waliyah Sahqani
                        </p>
                      </div>
                    </div>
                    <div className="HidePhone" style={{color: 'black', backgroundColor:'#EADEEE', textAlign: 'center'}}>
                      <p style={{paddingTop: '1em',paddingRight: '2em', paddingLeft: '2em',textAlign: 'center', color: 'black', fontSize:'3vh'}}>Video</p>
                      <video controls style={{width:'70%', borderRadius: '1em'}}>
                        <source src={TeklaVideo} type="video/mp4"/>
                      </video>
                      <div style={{color: 'black', paddingBottom:'4vh', backgroundColor:'#EADEEE',textAlign: 'center'}}>
                        <h3 style={{paddingRight: '2em', paddingLeft: '2em', paddingTop: '4vh',textAlign: 'center', color: '#B20911'}}><b>Team Members</b></h3>
                        <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'center', color: 'black'}}>
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
                <i class="fa fa-chevron-up fa-lg" style={{color: '#B20911', fontSize:'3vh', padding: '1vh'}}></i>
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
