import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, dow } from '../reduxtoolkit/reducer/cartAdd';

export default function Cart() {
  const data=useSelector((state)=>{
    return state.cartAdd
  })
  const dispatch = useDispatch();
 
  const gia = data.reduce((acc, item) => acc + (item.gia * item.quantity), 0) || 0;
  const up1 = (e) => {
    dispatch(up(e));
  };
  const dow1 = (e) => {
    dispatch(dow(e));
  };
  return (
    <>
  
      <h2>cart</h2>
      {data.map((item, index) => (
        <li key={index}>
          {item.name}==={item.gia}====
          <button onClick={() => up1(index)}>+</button>
          {item.quantity}
          <button onClick={() => dow1(index)}>-</button>
        </li>
      ))}
      <p>gia: {gia}</p>
    
      
    </>
  );
}
