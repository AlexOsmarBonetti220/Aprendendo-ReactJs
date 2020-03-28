import React from "react";

export default class Planet extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <h4>{this.props.nome}</h4>
                        <p>{this.props.desc}</p>
                        <img src={this.props.url} />
                    </li>
                </ul>
            </div>
        )
    }
}