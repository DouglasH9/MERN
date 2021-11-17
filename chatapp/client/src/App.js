import "./App.css"
import {BrowserRouter, Route} from "react-router-dom";
import MessageForm from './components/MessageForm';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <MessageForm/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
