import React, {useEffect,useState} from 'react';
import './index.css';
import AddItem from '../popup/AddItem'
import RemoveItem from '../popup/removeItem'
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000/'
const NOPHOTO = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png'

export default function ProductsList() {

    const [openAddItem, setOpenAddItem] = useState(false)
    const [OpenRemove, setOpenRemove] = useState(false)
    const [removeID, setRemoveID] = useState('')

    const [sortByAvailable, setSortByAvailable] = useState(null)
    const ByAvailable = () => {
        try {
            const byAvailable = ProductsList.slice(0);
            const byAvailableLess = ProductsList.slice(0);

            byAvailable.sort(function(a, b) { //from larger to smaller
                return b.Count - a.Count;
            });
            byAvailableLess.sort(function(a,b) { //from smaller to larger
                return a.Count - b.Count;
            });
            setProductsList(
                sortByAvailable ? byAvailable : byAvailableLess
            );
        } catch (error) {
            console.log(error);
        } 
    };

    const [sortByName, setSortByName] = useState(null)
    const ByName = () => {
        try {
            const byNames = ProductsList.slice(0);
            const byNamess = ProductsList.slice(0);
            byNames.sort(function(a,b) { // start from A
                const x = a.ProductName.toLowerCase();
                const y = b.ProductName.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
            byNamess.sort(function(a,b) { // end to A
                const x = a.ProductName.toLowerCase();
                const y = b.ProductName.toLowerCase();
                return x > y ? -1 : x < y ? 1 : 0;
            });
            setProductsList(
                sortByName ? byNamess : byNames
            ) 
        } catch (error) {
            console.log(error);
        }
    };
    
    const [ProductsList, setProductsList] = useState([])

    useEffect(() => { 
        fetch(`${API_URL}api/posts`)
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            setProductsList(data);
        })
        .catch( () => console.log("error") );
    }, [openAddItem, OpenRemove]) 

    return (
        <div className="ProductsList">
            <div className="add-buttom">
                <button 
                    onClick={ ()=> setOpenAddItem(true) }
                    style={{ 
                        color: ProductsList.length > 0 ? "white" : "red", 
                        border: ProductsList.length > 0 ? "none" : "1px solid red" 
                    }}
                    >Add new Product</button>
                <button onClick={ ()=> {ByAvailable(); setSortByAvailable(!sortByAvailable)} }>Available Products</button>
                <button onClick={ ()=> {ByName(); setSortByName(!sortByName)} }>Sort by alphabet</button>
            </div>
            <div className="ProductsList-wrapper">

                {ProductsList.length > 0 
                    ? 
                    ProductsList && ProductsList.map( item => {
                        return(
                            <div
                                className="ProductsList-item" 
                                key={item._id}>

                                <Link to={'/product/' + item._id}  >

                                <div className="ProductsList-item-img">
                                    <img src={item.imageUrl || NOPHOTO } alt="" width="100%" height="100%"/>
                                </div>

                                <div className="ProductsList-item-info">
                                    <span>Product: {item.ProductName || 'Soon will be add'}</span>
                                    <span>Available: {item.Count || 'Soon will be add'}</span>
                                </div>

                                </Link>

                                <button onClick={ () => {setOpenRemove(true); setRemoveID(item._id)} }>X</button>
                            </div>
                        )
                    })
                    : 
                    <div
                        style={{fontSize:'20px'}}
                        >
                        List is empty, add product [click on red button]
                    </div>
                }
            </div>
            {openAddItem ? <AddItem close={ () => setOpenAddItem(false) }/> : null}
            {OpenRemove ? <RemoveItem removeID={removeID} close={ () => setOpenRemove(false) }/> : null}
        </div>
    )
}
