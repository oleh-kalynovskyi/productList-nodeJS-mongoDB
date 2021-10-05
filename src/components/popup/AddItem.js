import React, {useState} from 'react';
import './index.css';

const API_URL = 'http://localhost:5000/'

export default function AddItem({close}) {

    const [AddItem, setAddItem] = useState({
        imageUrl: null,
        ProductName: null,
        Count: null,

        Width: null,
        Height: null,

        Weight: null,
        Comment: []
      })
      
    //   const handleChange = (e) => {
    //     const value = e.target.value;
    //     setAddItem({
    //         ...AddItem,
    //         [e.target.name]: value, 
    //     });
    //   }

      const postItem = (e) => {
        e.preventDefault();
        fetch(`${API_URL}api/posts`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(AddItem) 
        })
        .catch( () => console.log("error") );
        close()
      }

    return (
        <div onClick={ close } className="AddItem-box">
            <div className="AddItem-wrapper">
            <form 
                onClick={ (e)=> e.stopPropagation() } 
                className='AddItem'
                onSubmit={postItem}
            >
                <button onClick={ close }>Close</button>
                <label>
                    Img:
                    <input 
                        autocomplete="off"
                        type="text" 
                        name="imageUrl" 
                        id="" 
                        placeholder="Img"
                        onChange={(e) => setAddItem({...AddItem, imageUrl: e.target.value})} 
                    />
                </label>
                <label>
                    Product name:
                    <input 
                        autocomplete="off"
                        required
                        type="text" 
                        name="ProductName"
                        placeholder="Product name"
                        onChange={(e) => setAddItem({...AddItem, ProductName: e.target.value})}
                     />
                </label>
                <label>
                    Count:
                    <input 
                        autocomplete="off"
                        required
                        type="number" 
                        name="Count" 
                        placeholder="Count"
                        onChange={(e) => setAddItem({...AddItem, Count: e.target.value})}
                     />
                </label>
                <label >
                    Size:
                    <input 
                        autocomplete="off"
                        name="Width" 
                        type="number" 
                        placeholder="Width"
                        onChange={(e) => setAddItem({...AddItem, Width: e.target.value})}
                     />
                    <input 
                        autocomplete="off"
                        name="Height" 
                        type="number" 
                        placeholder="Height"
                        onChange={(e) => setAddItem({...AddItem, Height: e.target.value})}
                     />
                </label>
                <label>
                    Weight:
                    <input 
                        autocomplete="off"
                        name="Weight" 
                        type="number" 
                        id="" 
                        placeholder="Wight"
                        onChange={(e) => setAddItem({...AddItem, Weight: e.target.value})}
                     />
                </label>
                <button>Add Product</button>
            </form>
            </div>
        </div>
    )
}
