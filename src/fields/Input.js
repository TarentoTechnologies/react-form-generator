import React, { Component } from 'react'
import { LANG } from './constants/index.js'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldType: '',
    }
  }

  componentDidMount() {
    if (
      LANG.FIELD_TYPES.numeric === LANG.FIELD_TYPES[this.props.field.fieldType]
    ) {
      this.setState({
        fieldType: LANG.NUMBER,
      })
    } else {
      this.setState({
        fieldType: this.props.field.fieldType,
      })
    }
    if (this.props.field.isRequired) {
      document.getElementById('field-' + this.props.field.order).required = true
    }
  }

  render() {
    return (
      <div className='form-group'>
        <div
          className={`col-md-${
            this.props.field.width ? this.props.field.width : LANG.DEFAULT_COL
          }`}
        >
          <label htmlFor={'field-' + this.props.field.order}>
            {this.props.field.name}
          </label>
          <input
            type={this.state.fieldType}
            id={'field-' + this.props.field.order}
            name={'field-' + this.props.field.order}
            className='form-control'
            placeholder='Type Here'
            autoComplete='off'
          />
        </div>
      </div>
    )
  }
}

export default Input
