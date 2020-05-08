import React from 'react'
import Input from './fields/Input'
import Radio from './fields/Radio'
import Checkbox from './fields/Checkbox'
import Select from './fields/Select'
import Toggle from './fields/Toggle'
import Textarea from './fields/Textarea'
import Rating from './fields/Rating'
import Heading from './fields/Heading'
import Separator from './fields/Separator'
import { LANG } from './fields/constants/index.js'

export const FormGenerator = ({ formData }) => {
  console.log(formData)
  return (
    <div className='row pt-4 pr-4'>
      <div className='col-12'>
        <h4 className='ml-3 mb-4'>{formData.title || ''}</h4>
        <form
          autoComplete='off'
          className='pb-5'
          id={formData.formId || 'tarento-generated'}
        >
          {formData.fields &&
            formData.fields.map((field, index) => {
              switch (field.fieldType) {
                case LANG.SEPARATOR:
                  return <Separator key={index} />
                case LANG.HEADING:
                  return <Heading key={index} field={field} />
                default:
                  switch (LANG.FIELD_TYPES[field.fieldType]) {
                    case LANG.FIELD_TYPES.text:
                      return <Input key={index} field={field} />
                    case LANG.FIELD_TYPES.numeric:
                      return <Input key={index} field={field} />
                    case LANG.FIELD_TYPES.date:
                      return <Input key={index} field={field} />
                    case LANG.FIELD_TYPES.email:
                      return <Input key={index} field={field} />
                    case LANG.FIELD_TYPES.dropdown:
                      return <Select key={index} field={field} />
                    case LANG.FIELD_TYPES.radio:
                      return <Radio key={index} field={field} />
                    case LANG.FIELD_TYPES.checkbox:
                      return <Checkbox key={index} field={field} />
                    case LANG.FIELD_TYPES.boolean:
                      return <Toggle key={index} field={field} />
                    case LANG.FIELD_TYPES.textarea:
                      return <Textarea key={index} field={field} />
                    case LANG.FIELD_TYPES.rating:
                      return <Rating key={index} field={field} />
                    default:
                      return <div key={index}></div>
                  }
              }
            })}
          <div className='form-group'>
            <div className='col-md-12 only-label'>
              <button type='submit' className='btn btn-primary'>
                {LANG.SUBMIT}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
