import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import PCwebImage from './images/PCwebImage.png';
import SgoImage from './images/S&goImage.jpg';
import ArdLaser from './images/ArdLaser.png';

import AllIcons from './images/AllIcons.png';
import PhoneWallpaper from './images/PhoneWallpaper.png';

import BetsFriends2 from './images/BFscreens2.jpg';
import BFmockupMb from './images/BFmockupMb.png';
import LogoPC from './images/LogoPCpageN.png';
import BuildingModel from './images/BuildingModel.png';
import LogoNV from './images/LogoNV.png';
import LogoGV from './images/LogoGV.png';
import LogoUIN from './images/LogoUIN.png';
import LogoLdng from './images/LogoLdng.png';
import Island from './images/Island.jpg';

import TwitterPh from './images/TwitterPh.png';

import ReactFullpage from "@fullpage/react-fullpage";
import ArduinoLaser from './images/ArduinoLaser.mp4';
import ShareGo from './images/Share&go.mp4';
import PersonasIcon from './images/PersonasIcon.png';
import SketchIcon from './images/SketchIcon.png';
import FireBaseIcon from './images/FireBaseIcon.png';
import AngularIcon from './images/AngularIcon.png';
import AllAgesIcon from './images/AllAgesIcon.png';
import WagerIcon from './images/WagerIcon.png';
import PrizesIcon from './images/PrizesIcon.png';
import PCimageT from './images/PCimageT.jpg';
class Resume extends Component {
  render() {
    return (
      <ReactFullpage
        fitToSection = {true}
        sectionsColor = {["black", "black", "white"]}
        scrollOverflow = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section fp-auto-height">
                <div className = "MainFormat">
                <div className = "ContGrid3Bar" style={{color: 'white', paddingBottom: '4em'}}>
                  <div style={{fontSize: '1.5em', textAlign: 'left', color: 'black'}}>
                    <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/pcdesign">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'left'}}>
                      <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i>Previous</p></Link>
                    <Link className="LinkStyle HidePC" to="/PC-folio.github.io/pcdesign">
                    <i class="fa fa-chevron-left fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                    <Link className="LinkStyle" to="/PC-folio.github.io/">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'center'}}>Projects</p></Link>
                  </div>
                  <div style={{fontSize: '1.5em', textAlign: 'right', color: 'black'}}>
                  <Link className="LinkStyle HidePhone" to="/PC-folio.github.io/hackathonAD">
                    <p style={{color: 'white', fontSize:'3vh', textAlign: 'right'}}>Next
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></p></Link>
                  <Link className="LinkStyle HidePC" to="/PC-folio.github.io/hackathonAD">
                    <i class="fa fa-chevron-right fa-lg" style={{color: '#FFAD00', fontSize:'3vh', padding: '1vh'}}></i></Link>
                  </div>
                </div>
                  <img  src={LogoPC} style={{height: '30vh'}}/>
                  <p className = "SubTittle" style={{color: 'white', paddingBottom: '4vh'}}>"The latest codes I had developed."</p>
                  </div>
                </div>
              <div className="section">
              <img className="imageProject" src={PCimageT}/>
              <div style={{backgroundColor: 'white'}}>
                <p className="TextFont PaddingFix" style={{textAlign: 'justify', color: 'black', paddingTop: '4vh'}}>
                  My passion for technology motivates me to choose my studies on Computer Engineering at the Polytechnic University of Madrid, and since that moment, technology becomes
                  one of my hobbies. After years of learning different computer science techniques and working experience, these are the results of some personals projects. On the other
                  hand, this website is a representation of my technical knowledge.
                </p>
              <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Data Science</b></h3>
              <div className = "ContGrid2" style={{color: 'white', paddingBottom: '2em'}}>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={TwitterPh} style={{maxWidth: '100vh', width: '80%', height: 'auto'}}/>
                </div>
                <div style={{paddingBottom: '4em'}}>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  <b>Natural Language Processing</b></p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    My curiosity with NLP and to learn a new code language as python, encourage me to start a project that teaches me more about these topics. Before starting with the development of
                    the code, my first step was to read papers related to NLP and see the possible project I can begin. To test my knowledge, I developed a sentiment analysis code for tweets,
                    searching by users or words.
                  </p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    To reach the goal of the project, I choose to use Naive Bayes Classifier and have my first experience developing with machine learning classifier. The two main reasons I
                    pick this technique was the simplicity and the extensive documentation that I find on the internet. To train the classifier, I used a data library from the internet with
                    more than 6000 tweets divided into positive, negative or neutral. To increase the accuracy of the results, I clean the data set from irrelevant information, increase the
                    number of tweets at the database and use some technique, as stemming. The final result was a code that was able to analyse all the latest tweets filtering why a specific
                    word, user or both.
                  </p>
                </div>
                <div>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                  <b>Data Mining & Visualization</b></p>
                  <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    After my first experience with machine learning and the increasing popularity of Data Science, I decided to try another project to learn more about these topics. For this
                    project, I was looking fowers to develop a code that was able to predict from a large data set and use R as the coding language. After searching on the internet, I decided
                    to develop a prediction model bases on a database of surgical cases that has 4087 surgical cases with 36 variables.
                  </p><p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    The first step was to clean all the data that was irrelevant or did not affect the prediction, to guarantee the best outcome. Some of the techniques that were merging values,
                    hot encoding, and delete near-zero variance. The final database contains 3005 cases with 53 variables, using 15% of it for the testing and 85% for the training. Once we have
                    the database, I build three different models, the Random Forest, Linear Regression and Neural Networks. Having the three models help me to find out the advantage and disadvantage
                    of each of them and increase my experience for future similar projects.
                  </p>
                </div>
                <div style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}>
                  <img src={BuildingModel} style={{maxWidth: '100vh', width: '60%', height: 'auto'}}/>
                </div>
              </div>
              <div style={{backgroundColor: 'white'}}>
                <img className="imageProject" src={SgoImage} />
                <div>
                <h3 style={{textAlign: 'center', color: '#FFAD00'}}><b>Web development</b></h3>
                <div className = "ContGrid2" style={{color: 'black', backgroundColor:'white', paddingBottom:'4vh'}}>
                  <div>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                    <b>Web App</b></p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      Cloud solutions and web applications, have beings a hot topic for several years and having into account my curiosity, I decided to try these new technologies by myself. To test
                      all the knowledge I obtained during my bachelor, I decided to create a web app that helps people to share different transports options. On the other hand, doing this project I was
                      able to learn how to use React-Native and develop my first web interface.
                    </p>
                    <p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'black'}}>
                      To develop the solution, I divided the project into two main parts the front-end and back-end design. To create the front-end I used some library component as Material UI, an npm
                      package manager for Node.js, and create my CSS. For the back-end, I implemented Firebase as the database, and Google developers API to include the map interface and create a user
                      registration with a google account. The result was a web app working flawlessly, letting people share the rides as can be seeing at the video.
                    </p>
                  </div>
                  <div>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={ShareGo} type="video/mp4"/>
                    </video>
                  </div>
                </div>
                </div>
                <p className="TextFont PaddingFix" style={{textAlign: 'justify', color: 'black'}}>
                <b>Website</b></p>
                <p className="TextFont PaddingFix" style={{textAlign: 'justify', color: 'black'}}>
                Making use of my experience and skills doing websites, I participated in some project to develop websites using React-native. Additionally, making this website help me to keep learning more
                and improve my knowledge and skills. My portfolio was the latest website I developed, to be able to show all my skills and previous works. At the image below, you can see some screenshots of
                the previous website I developed or see this website that was also designed by me. </p><br/>
                <img className="imageProject" src={PCwebImage} />
              </div>
              </div>
                <div className="textPadding">
                </div>
                <div className = "ContGrid2" style={{color: 'white', backgroundColor:'black', paddingBottom:'4vh', paddingTop: '4vh'}}>
                  <div>
                    <h3 className = "HidePC" style={{textAlign: 'center', color: '#FFAD00'}}><b>Arduino</b></h3>
                    <video controls style={{width:'90%', borderRadius: '1em'}}>
                      <source src={ArduinoLaser} type="video/mp4"/>
                    </video>
                  </div>
                  <div>
                    <h3 className = "HidePhone" style={{textAlign: 'center', color: '#FFAD00'}}><b>Arduino</b></h3>
                    <br/><p className="TextFont" style={{paddingRight: '2em', paddingLeft: '2em', textAlign: 'justify', color: 'white'}}>
                      When I started my master, my curiosity on how companies can adopt new technologies to improve user usability increased. To experience this new concept, two friends and I decided to create an
                      Arduino solution that helps people to interact with the technology using their hand's movement. Before starting with the project, we research similar projects and tested different solutions,
                      like a radar or leap sensor. To develop this solution, we used an Arduino One combined with an Ultrasonic sensor, to detect the hand movement. The final, results let the user interact with any
                      multimedia application and music, presentations or videos. The user was able to map their movements to interact with the device most easily. At the video, you have an example of the final
                      result of the project.
                    </p>
                  </div>
                </div>
                <img className="imageProject" src={ArdLaser} />
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
