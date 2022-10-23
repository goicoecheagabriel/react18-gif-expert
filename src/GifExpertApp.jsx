import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Esquel', 'Bilbao' ]);
    // const [ inputValue, setInputValue ] = useState( '' )

    const onAddCategory = (newCategory) => {
       const itemsExistente = categories.filter( category => category.toLowerCase() === newCategory.toLowerCase() );
       
       if ( itemsExistente.length !== 0 ) return;

    //    if (categories.includes( newCategory )) return;

       setCategories( [ newCategory, ...categories ] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory } />
            
        { 
            categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category = { category } />
                ) 
            )
        }

    </>
  )
}
