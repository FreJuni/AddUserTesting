import React from 'react'

const ShowMem = ({item}) => {
    const {name,live,email} = item;
  return (
    <article className='cart-con'>
        <div className='info-con'>
            <h3>Name : {name}</h3>
            <p>Live : {live}</p>
            <p>Email : {email}</p>
        </div>
    </article>
  )
}

export default ShowMem