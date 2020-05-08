import React, { Component } from 'react'
import { LANG } from './constants/index.js'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
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
          <select
            className='custom-select'
            id={'field-' + this.props.field.order}
            name={'field-' + this.props.field.order}
          >
            <option defaultValue>Select option from the dropdown</option>
            {this.props.field.values.map((option, key) => (
              <option key={key} value={option.key}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Select
