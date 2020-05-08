import React from 'react'

import { FormGenerator } from 'tarento-react-form-generator'
import 'tarento-react-form-generator/dist/index.css'

const App = () => {
  var jsonData = require('./test-json-data.json')
  return <FormGenerator formData={jsonData.responseData} />
}

export default App
