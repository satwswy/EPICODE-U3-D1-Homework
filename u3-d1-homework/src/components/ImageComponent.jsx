import { Component } from "react";

class ImageComponent extends Component {

render() {
    return <img  src={this.props.source} alt={this.props.alt}/>
}



}

export default ImageComponent