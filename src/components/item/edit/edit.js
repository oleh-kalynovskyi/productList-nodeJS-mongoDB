import React, {useEffect,useState} from 'react';
import './index.css';

const API_URL = 'http://localhost:5000/'

export default function Edit({close, idItem, upDateInfo}) {
    
    const Edit = (e) => {
        e.preventDefault(); 
        fetch(`${API_URL}api/posts/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(item) 
        })
        .then((response) => {
            return response.json();
          })
        .then((data) => {
            seItem( data );
        })
        close()
        upDateInfo()
    }

    useEffect(() => { 
        fetch(`${API_URL}api/posts/` + idItem)
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            seItem(data);
        })
        .catch( () => console.log("error") );
    }, [])

    const [item, seItem] = useState('')

    return (
        <div onClick={ close } className="Edit-box">
            <div onClick={ (e)=> e.stopPropagation() } 
                className="Edit-wrapper">

                <form
                    className='Edit' 
                    onSubmit={ Edit }>

                    <label>
                        Img 
                        <input 
                            type="text" 
                            value={ item && item.imageUrl}
                            onChange={(e) => seItem({...item, imageUrl: e.target.value})} 
                        />
                    </label>
                    <label>
                        Product name
                        <input 
                            type="text" 
                            value={item && item.ProductName}
                            onChange={(e) => seItem({...item, ProductName: e.target.value})} 
                        />
                    </label>
                    <label>
                        Count
                        <input 
                            type="text" 
                            value={item && item.Count}
                            onChange={(e) => seItem({...item, Count: e.target.value})} 
                        />
                    </label>
                    <label>
                        Size
                        <input 
                            type="text" 
                            value={item && item.Width}
                            onChange={(e) => seItem({...item, Width: e.target.value})} 
                        />
                        <input 
                            type="text" 
                            value={item && item.Height}
                            onChange={(e) => seItem({...item, Height: e.target.value})} 
                        />
                    </label>
                    <label>
                        Wight
                        <input 
                            type="text" 
                            value={item && item.Weight}
                            onChange={(e) => seItem({...item, Weight: e.target.value})} 
                        />
                    </label>
                    <button>Seve change</button>
                </form>
            </div>
        </div>
    )
}
