import React, {Component} from 'react';
import './Filter.css'
import Checkbox from 'rc-checkbox';

class Filter extends Component {
    render() {
        const categories = ["bread","egg","fish","fruit","meat","milk","sheep"];
        return (
            <div className="FilterBox">
                <div className="Header"> 
                    Kategorier:
                </div>
                {categories.map(cat => 
                    <label className="Label">
                        <Checkbox className="CheckBox">
                        </Checkbox>
                         &nbsp; <img src={require('../farmerInformation/images/icons/' + cat + '.png')} className="IconFilter"/>
                    </label>
                )}
            </div>
        )
    }
}

export default Filter;