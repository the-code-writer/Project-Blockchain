import React from 'react';


class InputRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      name: this.props.name,
      value: this.props.value
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  checkboxHandler(e) {
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    return (

      <input
        className = "form-check-input form-radio-input"
        type = "radio"
        name = {this.state.name}
        defaultValue = {this.state.value}
        checked = {this.state.checked}
        onChange = {this.checkboxHandler}
        />
      )
    ;
  }
}

export default InputRadio;
