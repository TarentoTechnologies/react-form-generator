import React, { Component } from 'react'
import { LANG } from './constants/index.js'

class Textarea extends Component {
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
          <textarea
            id={'field-' + this.props.field.order}
            name={'field-' + this.props.field.order}
            className='form-control'
            placeholder='Type here'
            autoComplete='off'
          ></textarea>
        </div>
      </div>
    )
  }
}

export default Textarea
