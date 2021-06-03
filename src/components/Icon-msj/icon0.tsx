import React, {useState} from 'react';

const style = {
    icon:{
        // display: 'flex',
        color: '#2d3436',
        fontSize: '12px',
        cursor: 'pointer',
    }
};

export default function Icon0(){
    return(
        
        <span>
            <i className="fas fa-info-circle" style={style.icon}
            />
        </span>
            
    );
}
