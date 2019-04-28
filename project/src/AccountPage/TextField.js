import React from 'react';
import PropTypes from 'prop-types';
import './text-input-style.css';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            focussed: (props.locked && props.focussed) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || '',
      };
    }
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
    };
static defaultProps = {
    locked: false,
    focussed: false,
    value: '',
    error: '',
    label: '',
    predicted: '',
    onChange: () => '',
 };
 render() {
    const { focussed, value, error, label } = this.state;
    const { id, type, locked } = this.props;
    
//Lägg till onChange för att kunna faktiskt modifiera inputs
    return (
      <div className="field">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
        />
      </div>
    );
 }

}
export default TextField