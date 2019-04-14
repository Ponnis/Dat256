import React from "react";

class FarmerInformation extends React.Component {
    state = {  }
    render() { 
        return (
        <div className="farmerInformation">
          <div>{this.props.name}</div>
          <ol>{moves}</ol>
        </div>
        );
    }
}

 
export default FarmerInformation;