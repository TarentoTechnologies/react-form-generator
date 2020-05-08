# tarento-react-form-generator

> Form builder library

[![NPM](https://img.shields.io/npm/v/react-form-generator.svg)](https://www.npmjs.com/package/tarento-react-form-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tarento-react-form-generator
```

## Usage

```jsx
import React, { Component } from 'react'

import { FormGenerator } from 'tarento-react-form-generator'
import 'tarento-react-form-generator/dist/index.css'

class Example extends Component {
  render() {
    return <FormGenerator formData={jsonData} />
  }
}
```

## Sample Json Data

```jsx
{
  "formId": "my-form",
  "title": "Sample Form",
  "fields": [
    {
      "name": "Name",
      "fieldType": "text",
      "values": [],
      "order": 1,
      "isRequired": true,
      "width": 6
    },
    {
      "name": "Email",
      "fieldType": "email",
      "values": [],
      "order": 2,
      "isRequired": true,
      "width": 6
    },
    {
      "name": "Mobile",
      "fieldType": "numeric",
      "values": [],
      "order": 3,
      "isRequired": true,
      "width": 6
    },
    {
      "name": "Address",
      "fieldType": "textarea",
      "values": [],
      "order": 4,
      "isRequired": true,
      "width": 6
    },
    {
      "name": "separator",
      "fieldType": "separator",
      "values": [],
      "order": 5,
      "isRequired": false
    },
    {
      "name": "heading",
      "fieldType": "heading",
      "values": [
        {
          "heading": "Other Information",
          "subHeading": "Please fill other information"
        }
      ],
      "order": 6,
      "isRequired": false
    },
    {
      "name": "Gender",
      "fieldType": "radio",
      "values": [
        {
          "value": "Male",
          "key": "Male"
        },
        {
          "value": "Female",
          "key": "Female"
        }
      ],
      "order": 7,
      "isRequired": false
    },
    {
      "name": "DOB",
      "fieldType": "date",
      "values": [],
      "order": 8,
      "isRequired": false,
      "width": 2.0
    },
    {
      "name": "Willing to work in:",
      "fieldType": "checkbox",
      "values": [
        {
          "value": "Bangalore",
          "key": "Bangalore"
        },
        {
          "value": "Delhi",
          "key": "Delhi"
        }
      ],
      "order": 9,
      "isRequired": false
    },
    {
      "name": "Current Location",
      "fieldType": "dropdown",
      "values": [
        {
          "value": "Bangalore",
          "key": "Bangalore"
        },
        {
          "value": "Chennai",
          "key": "Chennai"
        },
        {
          "value": "Delhi",
          "key": "Delhi"
        },
        {
          "value": "Hyderabad",
          "key": "Hyderabad"
        }
      ],
      "order": 10,
      "isRequired": false
    },
    {
      "name": "Rate your Skills",
      "fieldType": "rating",
      "values": [],
      "order": 11,
      "isRequired": false
    },
    {
      "name": "Share your profile with others:",
      "fieldType": "boolean",
      "values": [],
      "order": 12,
      "isRequired": false
    }
  ]
}
```

## Fields Description

| Property | Type | Description |
|:---|:---|:---|
| formId | String | That would serve as form id |
| title | String | That would be the form title |
| field.name | String | Label of the field |
| field.fieldType | String | Type of the field |
| field.values | Array | Options of the field |
| field.order | Integer | NA |
| field.isRequired | Boolean | Whether required or not |

## License

MIT © [shoaib-mohmad](https://github.com/shoaib-mohmad)

# tarento-react-form-generator
