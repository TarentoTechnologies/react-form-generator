import React, { Component } from 'react'
import { LANG } from './constants/index.js'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
          <br />
          <label className='switch'>
            <input
              type='checkbox'
              id={'field-' + this.props.field.order}
              name={'field-' + this.props.field.order}
            />
            <span className='slider round'></span>
          </label>
        </div>
      </div>
    )
  }
}

export default Toggle
