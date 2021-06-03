import * as React from 'react';

const style = {
    // backgroundColor: '#f9f9ff',
    backgroundColor: '#FFFFFC',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
} as React.CSSProperties 

export default class Container extends React.Component{
    public render(){
        const { children } = this.props 
        return(
            <div style={style}>
                {children}
            </div>
        )
    }
}