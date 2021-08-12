import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Cardlist.css'

export const Cardlist = ({ id, url, description, price, count }) => {

    const cardlist = useSelector(state => state.cardlist)
    const dispatch = useDispatch()

    function remove() {
        let index = cardlist.findIndex((item, index) => item.id === id);
        let arr = [...cardlist];
        if (arr[index].count === 1) {
            arr.splice(index, 1);
        }
        else {
            arr[index].count--;
        }

        dispatch({ type: "ADD_CARD_LIST", payload: arr })
    }



    return (
        <div className="card-list">
            <div className="list-card-chooiced">
                <div className="img">
                    <img src={url} style={{ width: '50px', marginRight: '20px' }} alt="" />
                </div>
                <div className="detail">
                    <p>{description}</p>
                    <div className="count">
                        <p>${price} x {count}</p>
                        <button onClick={remove}>remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
