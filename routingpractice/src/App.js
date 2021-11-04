import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import WordsNums from './Components/WordsNums';
import Colors from './Components/Colors';

const Home = (props) => {
  return (
    <h1>Hello and Welcome!</h1>
  );
}




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing practice</h1>

        <h3>
          <Link to="/">Home</Link> | <Link to="/WordsNums/4">Number</Link> | <Link to="/WordsNums/Yo">Words</Link> | <Link to="/WordsNums/Dog/blue/red">Blue/Red</Link>
        </h3>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route exact path="/WordsNums/:wordsNums">
            <WordsNums></WordsNums>
          </Route>

          <Route exact path="/WordsNums/:wordsNums/:colorOne/:colorTwo">
            <Colors/>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
