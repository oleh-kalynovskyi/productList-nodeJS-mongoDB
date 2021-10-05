import React, {useEffect,useState} from 'react';
import './index.css';
import Comment from './comment/comment'
import Edit from './edit/edit'

const API_URL = 'http://localhost:5000/'

export default function ProductItem(props) {
    const idItem = props.match.params.id

    const [item, seItem] = useState('')
    const [openPopup, setOpenPopup] = useState(null)

    const [upDateInfo, setUpDateInfo] = useState(null)
    
    useEffect(() => { 
        fetch(`${API_URL}api/posts/` + idItem)
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            seItem(data);
        })
        .catch( () => console.log("error") );
    }, [upDateInfo]) 

    return (
        <div className='ProductItem'>
            <div className="ProductItem-wrapper">
                <img src={item.imageUrl} alt="" width="300px"/>
                <div className="item-info">
                    <span>Name: {item.ProductName || 'Soon will be add' }</span>
                    <span>Count: {item.Count || 'Soon will be add'}</span>
                    <span>Width: {item.Width || 'Soon will be add'}</span>
                    <span>Height: {item.Height || 'Soon will be add'}</span>
                    <span>Weight: {item.Weight || 'Soon will be add'}</span>
                </div>
            </div>
            <button onClick={()=> setOpenPopup(true)}>Edit</button>


            { openPopup ? 
                <Edit 
                    upDateInfo={()=> setUpDateInfo(!upDateInfo) } 
                    idItem={idItem} 
                    close={ () => setOpenPopup(false) }/> 
                : null 
            }
            <Comment idItem={idItem}/>
        </div>
    )
}
