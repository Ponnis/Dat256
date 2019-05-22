import React, { Component } from 'react';
import './Filter.css'
import Checkbox from 'rc-checkbox';
import StarRatings from 'react-star-ratings';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = { rating: 1, distance: 50 }
    }

    //Changes the rating (amount of black stars) depending on what the user enters
    //newRating is the amount of stars that should be black
    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
        this.props.onRatingClick(newRating);
    }

    render() {
        //List containing the different categories
        const categories = ["bread", "egg", "fish", "fruit", "meat", "milk", "sheep"];

        return (
            <div className="FilterBox">
                <div className="BigText">
                    Filter
                </div>
                <div className="Header">
                    Kategorier:
                </div>
                {categories.map(cat =>
                    <label className="Label">
                        <Checkbox className="CheckBox"
                            onChange={(event) => this.props.onCategoryClick(cat, event.target.checked)}>
                        </Checkbox>
                        &nbsp; <img src={require('../farmerInformation/images/icons/' + cat + '.png')} className="IconFilter" alt=""/>
                    </label>
                )}
                <div className="Header">
                    Betyg:
                </div>
                <StarRatings className="StarsFilter"
                    rating={this.state.rating}
                    starRatedColor={"black"}
                    starHoverColor={"green"}
                    starDimension={'25px'}
                    starSpacing={'0px'}
                    changeRating={(newRating, name) => this.changeRating(newRating, name)}
                    name='rating'
                />
                <div className="Header">
                    Avstånd:
                </div>
                <div className="SliderBox">
                    <Slider
                        defaultValue={50} 
                        min={10}
                        max={50}
                        step={5}
                        railStyle={{ backgroundColor: 'lightgrey'}}
                        trackStyle={{ backgroundColor: 'black'}}
                        handleStyle={{
                            borderColor: 'black',
                            height: 15,
                            width: 15,
                            backgroundColor: 'grey',
                          }}
                        onChange = {(value) => {this.setState({distance: value}); this.props.onDistanceClick(value)}}  
                    />
                    <label>
                        {this.state.distance} km
                    </label>
                </div>                             
            </div>
        )
    }
}

export default Filter;