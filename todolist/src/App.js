import ToDoInput from './Components/ToDoInput';
import React, {useState} from 'react';
import ItemDisplay from './Components/ListDisplay';
import './App.css';

function App() {

  const [currentItem, setCurrentItem] = useState([]);

  const gotNewItem = (newItem) => {setCurrentItem([...currentItem, newItem])};

  return (
    <div className="App">
      <ToDoInput onNewItem={gotNewItem}/>
      <ItemDisplay items={currentItem}/>
    </div>
  );
}

export default App;
