import React, {useState} from 'react';
import './App.css';
import MessageDisplay from './Components/DisplayContent';
import TabRow from './Components/Tabs';

function App() {

  const[currentMessage, setCurrentMessage] = useState("something")

  const gotNewMessage = (newMessage) => {setCurrentMessage(newMessage)}

  return (
    <div className="App">
      <TabRow onNewMessage={gotNewMessage}/>
      <MessageDisplay message={currentMessage}/>
    </div>
  );
}

export default App;
