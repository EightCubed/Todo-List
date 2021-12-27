import React, { useState } from 'react';
import AddButton from './add_button';
import {v4 as uuid} from 'uuid';

function AddToList ( {SendData} ){

    const [data,SetData]=useState("");

    function handleChange(e){
        SetData(e.target.value);
    }

    function AddToList(data){
        if(data!==""){
        const values={ id : uuid() , data : data , completed : false}
        SendData(values);
        SetData("");} 
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter' && data !== ""){
            const values={ id : uuid() , data : data , completed : false}
            SendData(values);
            SetData("");   
        }
    }
 
    return(
        <>
            <input style={ { borderRadius : "0.5rem" } } type="text" onKeyPress={handleKeyPress} onChange={handleChange} value={data}></input>
            <AddButton 
            handleAdd={()=>AddToList(data)}
            />
        </>
    )
}

export default AddToList;