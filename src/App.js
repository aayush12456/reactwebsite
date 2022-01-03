
import './App.css';
import Header from './MyComponents/Header'
import{Footer} from './MyComponents/Footer'
import {AboutCpp} from './MyComponents/AboutCpp';
import {Home} from './MyComponents/Home';

import {Anchor} from './MyComponents/Anchor';
import {TalentHunt} from './MyComponents/TalentHunt';
import {Press} from './MyComponents/Press';
import {Gallery} from './MyComponents/Gallery';
import {Cricket} from './MyComponents/Cricket';
import {AddContent} from './MyComponents/AddContent';
import {T20worldcup} from './MyComponents/T20worldcup';
import {Worldcup2011} from './MyComponents/Worldcup2011';
import {Dhonithebestfinisher} from './MyComponents/Dhonithebestfinisher';
import {Asiacup2010final} from './MyComponents/Asiacup2010final';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
 <Header/>
<Footer/>
   <Switch>
   <Route exact path="/" render={()=>{
      return(
         <>
        <AddContent/>
         </>)
   }} >
          </Route>
   <Route exact path="/cricket" >
            <Cricket />
          </Route>
   <Route exact path="/Home" >
            <Home />
          </Route>
          <Route exact path="/aboutcpp">
             <AboutCpp />
          </Route>
          <Route exact path="/Anchor">
             <Anchor />
          </Route>
          <Route exact path="/TalentHunt">
             <TalentHunt />
         
          </Route>
          <Route exact path="/Press">
             <Press />
          </Route>
          <Route exact path="/Gallery">
             <Gallery />
          </Route>
          <Route exact path="/t20worldcup">
             <T20worldcup />
          </Route>
          <Route exact path="/worldcup2011">
             <Worldcup2011 />
          </Route>
          <Route exact path="/dhonithebestfinisher">
             <Dhonithebestfinisher />
          </Route>
          <Route exact path="/Asiacup2010final">
             <Asiacup2010final />
          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
