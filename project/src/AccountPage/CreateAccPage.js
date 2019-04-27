import React from "react"

class CreateAccPage extends React.Component{
    constructor(){
        super()
    }

    handleChange(event) {
        this.setState({title: event.target.value})
    }

    render(){
        return(
            <div className="CreateAccPage">
            <input type="text" string name="title" value={this.state.title}
                onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

export default CreateAccPage