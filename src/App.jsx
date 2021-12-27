import React, { useState } from 'react';
import AddToList from './components/AddList';
import ListDisplay from './components/list_display';

function App(){

  const [List,SetList]=useState([]);
  const [displayAll,SetDisplayAll]=useState(true);

  function AddDataToList(data){
    const new_data = [...List];
    new_data.push(data);
    SetList(new_data);
  }

  function DeleteFromList(id){
    const newList=List.filter( (e)=> e.id !== id )
    SetList(newList);
  }

  const StatusChange=(id)=>{
    const newList=List.map( (element)=> element.id===id ? { ...element , completed:!element.completed }: element )
    SetList(newList);
  } 

  return(
    <>
    <h1>Todo </h1>
    <AddToList
    SendData={AddDataToList}
    />
    <ListDisplay
    list={List}
    displayAll={displayAll}
    toggleTodo={StatusChange}
    deleteList={DeleteFromList}
    />
    <br/>
    &emsp;&emsp;&emsp;&emsp;&emsp;<button onClick={()=>SetDisplayAll(!displayAll)}>{displayAll? "All" : "Unfinished" }</button>
    </>
  )
}

export default App;