import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);
    /*
    const [count, setCount] = useState(0);*/
    // utilizamos useEffect así para que sólo renderice el getGifs la primera vez que se ejecute el componente
    /*useEffect( () => {
        getGifs( category )
            .then( imgs => setImages (imgs));
    }, [ category ])*/
    
    //const state = useFetchGifs();
    const { data: images, loading } = useFetchGifs( category );       // desestructurando lo de arriba

    //console.log(images);


    //getGifs();
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
        { loading ? <p className='animate__animated animate__flash'>Cargando...</p> : <p>Fin de la carga</p> }
        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem 
                        key= {img.id}
                        { ...img } 
                    />
                ))
            }
        </div>
        </>
        
    )
}

