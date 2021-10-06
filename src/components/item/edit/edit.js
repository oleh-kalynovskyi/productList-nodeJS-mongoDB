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
    
    //   const handleChange = (e) => {
    //     const value = e.target.value;
    //     setItem({
    //         ...item,
    //         [e.target.name]: value, 
    //     });
    //   }
    // onChange={ handleChange } 

    const [item, setItem] = useState('')

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
                            name="imageUrl"
                            type="text" 
                            value={ item && item.imageUrl}
                            onChange={ handleChange } 
                        />
                    </label>
                    <label>
                        Product name
                        <input 
                            type="text" 
                            name="ProductName"
                            value={item && item.ProductName}
                            onChange={ handleChange } 
                        />
                    </label>
                    <label>
                        Count
                        <input 
                            name="Count"
                            type="text" 
                            value={item && item.Count}
                            onChange={ handleChange } 
                        />
                    </label>
                    <label>
                        Size
                        <input 
                            name="Width"
                            type="text" 
                            value={item && item.Width}
                            onChange={ handleChange }
                        />
                        <input 
                            name="Height"
                            type="text" 
                            value={item && item.Height}
                            onChange={ handleChange }
                        />
                    </label>
                    <label>
                        Wight
                        <input 
                            name="Wight"
                            type="text" 
                            value={item && item.Weight}
                            onChange={ handleChange }
                        />
                    </label>
                    <button>Seve change</button>
                </form>
            </div>
        </div>
    )
}
