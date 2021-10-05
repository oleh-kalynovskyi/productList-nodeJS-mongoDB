import React from 'react';
import moment from 'moment';
import './commentList.css'

export default function CommentList({ comment, removeComments }) {
    const IMAGE = 'https://lh3.googleusercontent.com/proxy/iyd3gvPMLct3V8mUDu2YUHKjds90-SVAyxgyZ4ix7W1bCNiC4yRmHOBPZCOv6oVvg-va3IFZzj_Ab-NxIainJBWbokJJg2PxLywm3w8l'
    const nowDate = new Date()
    return (
        <div className="CommentList">
            {
                comment && comment.map(item => {
                    return(
                        <div className="CommentList-wrappar" key={item.date}>
                            <div className="commentList-user">
                                <img src={IMAGE} alt="" width='20px' height="20px"/>
                                <span style={{marginLeft:'10px'}}>Your comment</span>
                                <span style={{marginLeft: "auto"}}>
                                    { moment( item.date && item.date).from(moment(nowDate)._d) }  
                                </span>
                            </div>
                            <div className="commentList-text">
                                <span>
                                    {item.description}
                                </span>
                                <button onClick={ ()=> removeComments(item.id) }> X </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
