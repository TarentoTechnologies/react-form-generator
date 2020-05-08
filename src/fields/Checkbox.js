import React, { Component } from 'react'
import { LANG } from './constants/index.js'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en',
    }
  }

  handleChange = (event) => {}

  render() {
    return (
      <div className='form-group'>
        <div
          className={`col-md-${
            this.props.field.width ? this.props.field.width : LANG.DEFAULT_COL
          }`}
        >
          <label>{this.props.field.name}</label>
          {this.props.field.values.map((option, key) => (
            <div className='checkbox' key={key}>
              <label htmlFor={'field-' + this.props.field.order}>
                <input
                  type='checkbox'
                  name={'field-' + this.props.field.order}
                  value={option.key}
                />
                {' ' + option.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Checkbox
