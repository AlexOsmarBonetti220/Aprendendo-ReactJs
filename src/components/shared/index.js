//Aqui entram os componentes que serão reutilizados
import React from "react";

export default class Img extends React.Component {
    render(){
        return(
            <img src={this.props.img} />
        )
    }
}