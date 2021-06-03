import * as React from 'react';

const style = {
    display: 'flex',

} as React.CSSProperties 

export default class Flexi extends React.Component{
    public render(){
        const { children } = this.props 
        return(
            <div style={style}>
                {children}
            </div>
        )
    }
}