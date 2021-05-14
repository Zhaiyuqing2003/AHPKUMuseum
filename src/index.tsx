import React from "react"
import ReactDOM from "react-dom"

function main(): void{
    const container = document.querySelector("#container")
    ReactDOM.render(<App />, container)
}

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            Hello World
        </div>)
    }
}

window.onload = main
