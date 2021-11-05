
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import StarForm from './Components/StarForm';
import StarPeople from './Components/StarPeople';
import Planets from './Components/Planets';

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to the Skywalker API!</h1>
      <StarForm/>
      <Switch>
        <Route path="/people/:id">
          <StarPeople/>
        </Route>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
