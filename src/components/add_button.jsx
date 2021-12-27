import React from 'react';

function AddButton ( {handleAdd} ){
    
    function AddFunction(){
        handleAdd();
    }

    return(
        <>
        <button onClick={()=>AddFunction()}>Add</button>
        </>
    )
}

export default AddButton;