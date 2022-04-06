import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();     // para que no ejecute el submit del form por defecto
        //console.log('Submit Hecho');
        // si la entrada, quitando espacios, es mayor de 2 caracteres, insertamos el valor
        if(inputValue.trim().length>2) {
            setCategories( cats => [inputValue, ...cats]);  // insertatmos el valor en el array
            setInputValue('');      // Inicializamos el imput en vacío
        }
        //console.log(setCategories);


    }
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value = { inputValue }
                    onChange = { handleInputChange }
                />
            </form>
        </>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}