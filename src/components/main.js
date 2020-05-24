import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Projects from './projects';
import Posti from './posti';
import HackathonGOC from './hackathonGOC';
import HackathonAD from './hackathonAD';
import HackathonWK from './hackathonWK';
import HackathonEU from './hackathonEU';
import BetsFriends from './betsFriends';
import Vredestein from './vredestein';
import PCdesign from './pcdesign';
import PCtechnical from './pctechnical';
import PCwork from './pcwork';
import IandE from './iande';
import Tekla from './tekla';

const Main = () => (
  <Switch>
    <Route exact path="/PC-folio.github.io/" component={LandingPage}/>
    <Route path="/PC-folio.github.io/projects" component={Projects} />
    <Route path="/PC-folio.github.io/posti" component={Posti} />
    <Route path="/PC-folio.github.io/hackathonGOC" component={HackathonGOC} />
    <Route path="/PC-folio.github.io/hackathonAD" component={HackathonAD} />
    <Route path="/PC-folio.github.io/hackathonWK" component={HackathonWK} />
    <Route path="/PC-folio.github.io/hackathonEU" component={HackathonEU} />
    <Route path="/PC-folio.github.io/betsFriends" component={BetsFriends} />
    <Route path="/PC-folio.github.io/vredestein" component={Vredestein} />
    <Route path="/PC-folio.github.io/pcdesign" component={PCdesign} />
    <Route path="/PC-folio.github.io/pctechnical" component={PCtechnical} />
    <Route path="/PC-folio.github.io/pcwork" component={PCwork} />
    <Route path="/PC-folio.github.io/tekla" component={Tekla} />
    <Route path="/PC-folio.github.io/iande" component={IandE} />

  </Switch>
)

export default Main;
