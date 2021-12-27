import React from 'react';

function ListDisplay( { list , displayAll , toggleTodo , deleteList } ){

    function handleClick(e){
        toggleTodo(e.id);
    }

    function handleDelete(e){
        deleteList(e.id);
    }

    console.log(list);
    return(
        list.map( (e)=>  displayAll ? ( <h4 key={e.id}>&emsp; - &emsp;{e.data} &emsp; <span onClick={()=>handleClick(e)}>status :  {e.completed.toString()}</span> &emsp; <button onClick={()=>handleDelete(e)}>Delete</button></h4> ) : e.completed ? null : <h4 key={e.id}>&emsp; - &emsp;{e.data} &emsp; <span onClick={()=>handleClick(e)}>status :  {e.completed.toString()}</span> &emsp; <button onClick={()=>handleDelete(e)}>Delete</button></h4>) 
    )
}

export default ListDisplay