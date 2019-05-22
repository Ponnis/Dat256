import React from 'react';
import PropTypes from 'prop-types';
import './TextInputStyle.css';

// renders the view for login
class LoginView extends React.Component {
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
    id:'',
    locked: false,
    focussed: false,
    value: '',
    error: '',
    label: '',
    predicted: '',
    onChange: () => '',
 };

onChange = async(event) => {
    const value = event.target.value;
    await this.setState({value: value});
    console.log(this.props.id)
    console.log(this.state.value)
    this.props.handleChange(this.props.id, this.state.value)
}
 render() {
    const { value,label } = this.state;
    const { id } = this.props;
    
//Lägg till onChange för att kunna faktiskt modifiera inputs
    return (
      <div className="TextFieldLogIn">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.onChange}
        />
      </div>
    );
 }

}
export default LoginView