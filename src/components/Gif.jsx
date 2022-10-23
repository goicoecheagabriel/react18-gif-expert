import React from 'react'

export const Gif = ({ url, title, id }) => {
  return (
    <>
        <div className='card'>
            <img src={ url } alt={ title } />
            <p> { title !== '' ? title : 'not title found' } </p>
            {/* <h6> { id } </h6> */}
        </div>
    </>
  )
}
