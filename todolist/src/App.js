import ToDoInput from './Components/ToDoInput';
import React, {useState} from 'react';
import ItemDisplay from './Components/ListDisplay';
import './App.css';

function App() {

  const [currentItem, setCurrentItem] = useState([]);

  const gotNewItem = (newItem) => {setCurrentItem([...currentItem, newItem])};

  const setComplete = (i) => {
    // const taskToComplete = [...currentItem];
    // taskToComplete[i].isCompleted = !taskToComplete[i].isCompleted;
    // setCurrentItem([...taskToComplete]);
    setCurrentItem(currentItem.map((task, idx) => {
      return i === idx ? 
      {...task, isCompleted : !task.isCompleted} :
      {...task}
    } ))
  }

  const deleteThis = (idx) => {
    console.log(idx);
    setCurrentItem(currentItem.filter((_item, i) => i !== idx))
  }

  return (
    <div className="App">
      <ToDoInput onNewItem={gotNewItem}/>
      <ItemDisplay items={currentItem} setComplete ={setComplete} deleteThis = {deleteThis}/>
    </div>
  );
}

export default App;
