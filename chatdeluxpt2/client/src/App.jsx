import { BrowserRouter, Route, Switch } from "react-router-dom"
import Form from "./components/Form"
import Chat from "./components/Chat"
import './App.css'

function App() {


  return (
    <div className="App">
      <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h1>Hello!</h1>
            <Form/>
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
