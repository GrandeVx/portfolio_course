import React, {useEffect} from 'react';
import { useLocation } from 'react-router';



const ScrollTop = () => {


    const {location} = useLocation();

    useEffect(() => {

        window.scroll({
            top:0,
            left:0,
        })


    },[location])



    return null;


}

export default ScrollTop;