import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex } from 'theme-ui'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormField } from '../../components/form-field'

const accountSchema = yup.object().shape({
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

export const Ui = ({ onSubmit, errorState, toggleModal }) => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(accountSchema),
  })

  useEffect(() => {
    if (errorState) {
      for (const name in errorState.errors) {
        setError(name, { type: 'server', message: errorState.errors[name] })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorState])

  return (
    <Flex
      variant="content.normal"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Box
        mt={4}
        mb={6}
        py={5}
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
          type="password"
          registerFn={register}
          error={errors.password}
        />
        <FormField
          name="passwordCon"
          label="Password Confirmation"
          type="password"
          registerFn={register}
          error={errors.passwordCon}
        />
        <Button mt={3} type="submit" variant="buttons.secondary">
          Update Account
        </Button>
        {toggleModal && (
          <Button
            mt={3}
            ml={1}
            variant="buttons.secondary"
            onClick={() => toggleModal(false)}>
            Close
          </Button>
        )}
      </Box>
    </Flex>
  )
}
