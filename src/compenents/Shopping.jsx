import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../reduxtoolkit/reducer/cartAdd';
export default function Shopping() {
  const dispatch = useDispatch(); // Khai báo useDispatch ở đây
  const getData = useSelector((state) => {
    return state.dataCart
  });

  const addToCart = (item) => {
    dispatch(addCart(item));
  }
  return (
    <>
        <div>
          <h2>Shopping</h2>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </div>
       {  <ul>
          {getData.map((item, index) => {
            return (
              <li key={index}>
                name: {item.name}----gia: {item.gia}----
                <button onClick={() => addToCart(item)}>AddToCart</button>
              </li>
            );
          })}
        </ul> }
    </>
  );
}
