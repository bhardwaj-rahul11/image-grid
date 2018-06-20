import React from 'react';
import './gallary.css';
import Grid from './Grid';
import Slider from './Slider';

export default class Gallary extends React.Component{
    constructor(){
        super();
        this.state={
            showSlider : false,
            indexOfSelectedImage : 0
        }
    }
    showSlider = (index) => {
        this.setState({
            showSlider:true,
            indexOfSelectedImage:index
        });
    }
    closeSlider = () => {
        this.setState({showSlider : false});
    }
    render(){
        let sliderProps = {
            images : this.props.images,
            closeSlider : this.closeSlider,
            index : this.state.indexOfSelectedImage
        }

        let gridProps = { 
            showSlider : this.showSlider,
            images : this.props.images
        }
        if(this.state.showSlider){
            return(
                <div className='slider'>
                    <Slider {...sliderProps} />
                </div>
            )
        }
        else{
            return(
                <div>
                    <Grid {...gridProps} />
                </div>
            )
        }
    }
}


