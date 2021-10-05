import React, {useState,useEffect} from 'react';
import CommentList from './commentList/commentList'
import moment from 'moment';
import './comment.css'

const API_URL = 'http://localhost:5000/'

export default function Comment({idItem }) {

    const [CommentOne, setCommentOne] = useState({})
    
    function handleChange(e) {
        const value = e.target.value;
        setCommentOne({
            ...CommentOne,
            id: Math.random(),
            productId: idItem,
            description: value,
            date: moment()._d
        });
    }    
    
    const [item, seItem] = useState('')

    const addComment = (e) => {
        e.preventDefault();
        e.target.reset();

        item.Comment.push(CommentOne);
        fetch(`${API_URL}api/posts/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(item) 
        })
    }

    const removeComments = (id) => {
        const remove = item.Comment.filter(el => el.id !== id) ;
        item.Comment = remove;
        fetch(`${API_URL}api/posts/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(item) 
        })
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
    }, [addComment, removeComments])


    return (
        <div className='Comment'>
            Write Comment:
            <form onSubmit={ addComment } className="comment-form" >
                <textarea 
                    required
                    cols="50" 
                    rows="5"
                    name="description"
                    onChange={handleChange}>
                </textarea>

                <button>
                    Send
                </button>
            </form>

            <CommentList
                comment={ item.Comment } 
                removeComments={ removeComments }/>
        </div>
    )
}
