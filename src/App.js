
import './App.css';
import Header from './components/Header';
import Screen1 from './components/Screen1';

import {Route,Switch} from "react-router-dom"
import Screen2 from './components/Screen2';
function App() {
  return (
    <div className="App">
       <Header/>
       <div className="container">
       <Switch>
         
         <Route exact path='/friendsWhoEnrolled'><Screen2/></Route>
         <Route path='/'><Screen1/></Route> 
       </Switch>
       </div>
    </div>
  );
}

export default App;
