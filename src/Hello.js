import React from 'react';
import './Hello.css';

const Hello = (props) => {
  console.log(props);

  return (
    <div className='tc f1'>
      <h1>Hello World</h1>
      <p>{props.hi}</p>
    </div>
  )
}

export default Hello;
