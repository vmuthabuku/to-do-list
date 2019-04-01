import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class Note extends Component{
    render(){
        return(
            <Card fluid style={{height:"5em"}}onClick={this.props.deleteMethod}><center style={{marginTop:"1.5em"}}>{this.props.text}</center></Card>
        )
    }
}

export default Note

