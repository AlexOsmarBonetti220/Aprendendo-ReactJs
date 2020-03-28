import React from "react";

import Img from "../shared/index";
import Description from "../shared/description";
import Botao from "../shared/botao";

export default class Planet extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <h4>{this.props.nome}</h4>
                        <Img img={this.props.url} />
                        <Description desc={this.props.desc} link={this.props.link} />
                        <br></br>
                        <Botao clique={() => this.props.clickNoPlaneta(this.props.nome)} />
                    </li>
                </ul>
            </div>
        )
    }
}