import React, {Component} from 'react';
import './Filter.css'
import Checkbox from 'rc-checkbox';

class Filter extends Component {
    render() {
        return (
            <div className="FilterBox">
                <div className="Header"> 
                    Kategorier:
                </div>
                <label className="Label">
                    <Checkbox>
                    </Checkbox>
                    &nbsp; <img src={require('../farmerInformation/images/icons/bread.png')} className="IconFilter"/>
                </label>
                <label className="Label">
                    <Checkbox>
                    </Checkbox>
                    &nbsp; <img src={require('../farmerInformation/images/icons/egg.png')} className="IconFilter"/>
                </label>
                <label>
                    <Checkbox>
                    </Checkbox>
                    &nbsp; <img src={require('../farmerInformation/images/icons/fish.png')} className="IconFilter"/>
                </label>
            </div>
        )
    }
}

export default Filter;