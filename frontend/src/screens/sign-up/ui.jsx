import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex, Input, Label } from 'theme-ui'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Alert } from '../../components/alert'
import { FormField } from '../../components/form-field'
import { FormFieldError } from '../../components/form-field-error'

const signUpSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email address'),
  password: yup.string().required('Password is required'),
  passwordCon: yup
    .string()
    .required('Password Confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const Ui = ({ onSubmit, wasInvalidInput }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  })
  console.log(errors)

  return (
    <Flex
      variant="content.normal"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      {wasInvalidInput && (
        <Alert isError={true}>Uh oh. Looks like there are some errors.</Alert>
      )}
      <Box
        mt={4}
        mb={6}
        py={6}
        px={6}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'primary',
        }}>
        <FormField
          name="firstName"
          label="First Name"
          registerFn={register}
          error={errors.firstName}
        />
        <FormField
          name="lastName"
          label="Last Name"
          registerFn={register}
          error={errors.lastName}
        />
        <FormField
          name="email"
          label="Email"
          registerFn={register}
          error={errors.email}
        />
        <FormField
          name="password"
          label="Password"
          registerFn={register}
          error={errors.password}
        />
        <FormField
          name="passwordCon"
          label="Password Confirmation"
          registerFn={register}
          error={errors.password}
        />
        <Button type="submit" variant="buttons.secondary">
          Sign Up
        </Button>
      </Box>
    </Flex>
  )
}
