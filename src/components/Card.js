import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-black-20 br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robos' src={`https://robohash.org/${id}?size=260x260`} />
      <div className='lightest-blue'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
