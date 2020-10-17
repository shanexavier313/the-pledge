import React from 'react'
import { Input, Label, Textarea, Select } from 'theme-ui'
import { FormFieldError } from '../form-field-error'

export const FormField = ({
  name,
  label,
  type = 'text',
  registerFn,
  error,
  list,
  multiLine = false
}) => {
  console.log(error);
  return (
    <>
      <Label htmlFor={name} variant="text.body.small" color="base800">
        {label}
      </Label>
      {list && (
        <Select
          defaultValue={null}
          ref={registerFn}
          my={1}
          name={name}
          aria-describedby={`${name}Error`}>
          <option value={null}></option>
          {Object.keys(list).map((key, index) => (
            <option key={index} value={key}>
              {list[key]}
            </option>
          ))}
        </Select>
      )}
      {!list && (<>
        {multiLine ?
          <Textarea
            name={name}
            type={type}
            aria-describedby={`${name}Error`}
            ref={registerFn}
            rows={2}
            my={1}
          />
          :
          <Input
            name={name}
            type={type}
            aria-describedby={`${name}Error`}
            ref={registerFn}
            my={1}
          />
        }
        </>
      )}

      {error && (
        <FormFieldError id={`${name}Error`} mb={1}>
          {error.message}
        </FormFieldError>
      )}
    </>
  )
}
