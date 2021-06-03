import React, {useState} from 'react';
import Mensaje from './mensaje';

const style = {
    icon:{
        // display: 'flex',
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    }
};

export default function Icon(){
    const [dropdown, setDropdown] = useState(false); 
    const onMouseEnter = () => {   
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    const onMouseLeave = () => {  
    if (window.innerWidth < 960) {
        setDropdown(false);
    } else {
        setDropdown(false);
    }
    };
    return(
        
        <div>
            <i className="fas fa-info-circle" style={style.icon}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            />
           {dropdown &&  <Mensaje></Mensaje>} 
        </div>
            
    );
}