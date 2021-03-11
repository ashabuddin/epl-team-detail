
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import ClubDetail from './components/ClubDetail/ClubDetail';


function App() {
  return (
    <Router>
       <Switch>
          <Route path='/home'>
            <Home/>
          </Route>         
          <Route exact path='/'>
              <Home></Home>  
          </Route>
           <Route path='/footballClub/:idTeam'>
              <ClubDetail></ClubDetail>
          </Route> 
       </Switch>
    </Router>
  );
}

export default App;
