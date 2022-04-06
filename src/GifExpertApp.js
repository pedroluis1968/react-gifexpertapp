import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        //setCategories( 'HunterXHunter');    // esto muta el estado y sustituye el array por un string
        setCategories( [...categories,'HunterXHunter']); // agrega un nuevo elemento al final del array
        // Otra forma de hacerlo es con una función callback. Útil 
        setCategories( cats => [...cats, 'Hunter2XHunter2'] ); 
    }
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr />


            <ol>
                {
                    categories.map( (category) =>
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
