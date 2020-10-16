import React from 'react'
import { Input, Label } from 'theme-ui'
import { FormFieldError } from '../form-field-error'

export const FormField = ({
  name,
  label,
  type = 'text',
  registerFn,
  error,
}) => {
  // console.log(error)
  return (
    <>
      <Label htmlFor={name} variant="text.body.small" color="primary">
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        aria-describedby={`${name}Error`}
        ref={registerFn}
        my={1}
      />
      {error && (
        <FormFieldError id={`${name}Error`} mb={1}>
          {error.message}
        </FormFieldError>
      )}
    </>
  )
}
