import React from 'react';
import './grid.css';
const MAXIMUM_GRID_SIZE = 5;

export default class Grid extends React.Component{
   
    render(){
        let cells = Math.min(this.props.images.length,MAXIMUM_GRID_SIZE);
        let images=this.props.images.slice(0,cells);
        return(
            <div className = 'grid-container'>
                {images.map((image,index)=>{
                    return (
                        <div  className = {`item-${cells}-${index}`}  onClick={()=>this.props.showSlider(index)}>
                            <img  alt='' src={image} />
                            {index==MAXIMUM_GRID_SIZE-1 && <div className="centered" onClick={()=>this.props.showSlider()} >View All Images</div>}
                        </div>
                    )
                })}
                
            </div>
        )
    }
}


