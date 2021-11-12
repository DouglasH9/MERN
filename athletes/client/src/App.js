import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Views/Main';
import CreateAthlete from './Views/CreateAthlete';
import ViewAthlete from './Views/ViewAthlete';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/create">
          <CreateAthlete/>
        </Route>
        <Route exact path="/view/:id">
          <ViewAthlete/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
