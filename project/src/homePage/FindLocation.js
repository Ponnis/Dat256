import React from 'react';
import {geolocated} from 'react-geolocated';
 
class FindLocation extends React.Component {
 
  render() {
    return (
      !this.props.isGeolocationAvailable
      ? <div>Din webbläsare har inte support för platsbehörighet</div>
      : !this.props.isGeolocationEnabled
        ? <div>Platsbehörighet är avstängd</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
      : <div>Hämtar din position&hellip; </div>)
   
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(FindLocation);