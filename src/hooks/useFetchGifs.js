import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

// un customHook
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        // Hacemos la petición http
        getGifs( category )
            .then( imgs => {
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 500);
            })
            
    }, [ category ])
    
    /*setTimeout( () => {
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000);*/

    return state;   // { data:[], loading:true };
}