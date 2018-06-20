import React, {Component} from 'react';
import './slider.css';

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            indexOfShownImage :this.props.index
        }
    }
    increaseIndex = () => {
        let index = ((this.state.indexOfShownImage+1)>=this.props.images.length)? 0 :(this.state.indexOfShownImage+1);
        this.setState({indexOfShownImage : index});
    }
    decreaseIndex = () => {
        let index = ((this.state.indexOfShownImage-1)<0)? this.props.images.length-1 :(this.state.indexOfShownImage-1)
        this.setState({indexOfShownImage : index});
    }
    render(){
        const {images}=this.props;
        const index = this.state.indexOfShownImage;
        return(
            <div>
                <div className="container">
                    <img alt='' src={images[index]} />
                </div>
                <button onClick={this.decreaseIndex} className='left-arrow'>Previous</button>
                <button onClick={this.increaseIndex} className='right-arrow'>Next</button>
                <button onClick={()=>this.props.closeSlider()} className='close-button'>close</button>
            </div>
        )

    }
}