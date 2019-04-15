import React from "react";
import "./CloseIconPage.css"

class CloseIconPage extends React.Component{
  render(){
      return (
          <button type="button" className="" aria-label="Close" onClick={this.props.callback}>
              <span aria-hidden="true">×</span>
          </button>
      );
  }

}

export default CloseIconPage;