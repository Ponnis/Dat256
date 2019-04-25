import React from "react";
import "./CloseIconPage.css"

// Close button
class CloseIconPage extends React.Component{
  render(){
      return (
          <button type="button" aria-label="Close" onClick={this.props.callback}>
              <span aria-hidden="true">x</span>
          </button>
      );
  }
}

export default CloseIconPage;