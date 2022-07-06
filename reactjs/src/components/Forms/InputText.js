import React from 'react';
import Snippets from "../../scripts/Snippets";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    const defaultClassName = 'form-text-input';
    let classNameArray = (defaultClassName + this.props.className).toString().split(' ');
    classNameArray = classNameArray.filter(Snippets.onlyUnique);
    let attrs = {
      className: classNameArray.join(' '),
      name: this.props.name,
      value: this.props.value,
      attrsProps: {}
    };
    for (var prop in this.props) {
      if (!attrs.hasOwnProperty(prop)) {
        attrs.attrsProps[prop] = props[prop];
      }
    }
    this.state = attrs;
    this.textInputChangeHandler = this.textInputChangeHandler.bind(this);
  }

  textInputChangeHandler(e) {
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    return (
      <input
        className={this.state.className}
        type="text"
        name={this.state.name}
        defaultValue={this.state.value}
        onChange={this.textInputChangeHandler}
        {...this.state.attrsProps}
      />
    );
  }
}

export default InputText;
