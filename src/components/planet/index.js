import React from "react";

import Img from "../shared/index";
import Description from "../shared/description";

export default class Planet extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <h4>{this.props.nome}</h4>
                        <Img img={this.props.url} />
                        <Description desc={this.props.desc} link={this.props.link} />
                        
                    </li>
                </ul>
            </div>
        )
    }
}