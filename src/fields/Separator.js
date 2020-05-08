import React, { Component } from 'react'

class Separator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en',
    }
  }

  render() {
    return (
      <div className='form-group'>
        <div className='col-md-12 only-label'>
          <hr />
        </div>
      </div>
    )
  }
}

export default Separator
