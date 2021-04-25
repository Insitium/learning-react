import React from 'react';

/*function HelloWorld(props){
    return(
        //<h1>Hello Sarthak</h1>
        <a href="https://www.youtube.com/">This is the youtube link for {props.name}</a>
    )
}*/

class HelloWorld extends React.Component{
    render(){
        return(
            <h1> Hello! {this.props.name}</h1>
        )
    }
}
export default HelloWorld