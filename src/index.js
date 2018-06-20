import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Gallary from './components/Gallary';
import getImages from './modal.js'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            images:[]
        }
    }
    componentDidMount(){
        let images=getImages();
        this.setState({images:images});
    }
    render(){
        return(
            <Gallary images={this.state.images}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

