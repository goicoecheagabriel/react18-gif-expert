import React, { useEffect, useState } from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
// import { Gif } from './Gif'
import { Gif } from '/src/components'



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
    <>
        <h3> { category } </h3>
        { 
            isLoading && (<h2>Cargando...</h2>) 
        }

        
        <div className="card-grid">
            { images.map( (image) => (
                    <Gif 
                        key={ image.id }
                        { ...image } />
                    )
                ) 
            }
        </div>
        

    </>
    )
}
