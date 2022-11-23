import { useState } from 'react';
import x from '../../images/stock.avif'


export const ImageSlider = ({ slides }) => {


    return (
         
            <div style={{
        backgroundImage: 'url({ slides })',
        height:'100%',
        width:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
     

            }} > </div>
    
    )
}

export default ImageSlider;