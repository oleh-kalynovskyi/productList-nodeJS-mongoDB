import React from 'react'

const API_URL = 'http://localhost:5000/'

export default function RemoveItem({close, removeID}) {

    const removeProducts = () => {
        fetch(`${API_URL}api/posts/` + removeID, {
            method: 'delete',
        })
        .catch( () => console.log("error") );

        close()
    }

    return (
        <div onClick={ close } className="AddItem-box">
            <div onClick={ (e)=> e.stopPropagation() } 
                className="AddItem-wrapper"
                style={{ display: 'flex', flexDirection: "column"}}>
                <span style={{marginBottom:"10px"}}>Are You sure want remove this Item?</span>
                <button style={{marginBottom:"10px", background: "#ff5757"}} onClick={ removeProducts }>Yes</button>
                <button onClick={ close }>No</button>
            </div>
        </div>
    )
}
