import React, {Fragment} from "react";

export default class Descricao extends React.Component {
    render(){
        return(
            <Fragment>
                <p>{this.props.desc}</p>
                <span><a href="#">{this.props.link}</a></span>
            </Fragment>
        )
    }
}