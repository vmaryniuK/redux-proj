import React, {Component} from "react";
import ErorrIndicator from "../error-indicator";


class ErorrBoundry extends Component{
    state = {
        hasErorr :false
    };
    componentDidCatch() {
        this.state({hasErorr: true})
    }
    render() {
        if(this.state.hasErorr){
            return <ErorrIndicator/>
        }
    return this.props.children;
    }

}

export default ErorrBoundry;