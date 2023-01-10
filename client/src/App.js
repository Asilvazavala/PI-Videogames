import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { CreateGame } from './components/CreateGame';
import { GameDetail } from './components/GameDetail';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
         <Switch>
            <Route exact path = '/' component = {Landing}/>
            <Route path = '/home' component = {Home}/>
            <Route path = '/home:id' component = {GameDetail}/>
            <Route path = '/newGame' component = {CreateGame}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App; 
