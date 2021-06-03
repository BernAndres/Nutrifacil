import React, {useState} from 'react';
import Mensaje from './msj6';

const style = {
    iconInactive:{
        // display: 'flex',
        color: '#2d3436',
        fontSize: '20px',
        cursor: 'pointer',
    },
    iconActive:{
        // display: 'flex',
        color: '#6BDF58',
        fontSize: '20px',
        cursor: 'pointer',
    }
};

export default function Icon6(){
    const [dropdown, setDropdown] = useState(false); 
    const onMouseEnter = () => setDropdown(true);
    const onMouseLeave = () => setDropdown(false);
    return(
        
        <div>
            <i className="fas fa-info-circle" style={dropdown ? style.iconActive : style.iconInactive}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            />
           {dropdown &&  <Mensaje></Mensaje>} 
        </div>
            
    );
}