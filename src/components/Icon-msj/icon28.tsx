import React, {useState} from 'react';
import Mensaje from './msj28';

const style = {
    iconInactive:{
        // display: 'flex',
        color: '#6BDF58',
        fontSize: '20px',
        cursor: 'pointer',
        marginLeft: '5px',
    },
    iconActive:{
        // display: 'flex',
        color: '#8DF57C',
        fontSize: '20px',
        cursor: 'pointer',
        marginLeft: '5px',
    }
};

export default function Icon28(){
    const [dropdown, setDropdown] = useState(false); 
    const onMouseEnter = () => setDropdown(true);
    const onMouseLeave = () => setDropdown(false);
    return(
        
        <span>
            <i className="fas fa-info-circle" style={dropdown ? style.iconActive : style.iconInactive}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            />
           {dropdown &&  <Mensaje></Mensaje>} 
        </span>
            
    );
}