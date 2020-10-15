import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex, Input, Label } from 'theme-ui'
import { useDispatch } from 'react-redux';
import { Alert } from 'components/alert'
import { FormFieldError } from 'components/form-field-error'
import { getAccessToken } from 'domains/identity'
import { loginAction } from 'redux/actions/authActions'

export const Login = () => {
  const [wereCredentialsDenied, setWereCredentialsDenied] = useState(false)
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await loginAction(dispatch, data.email, data.password);
      console.log('onSubmit', getAccessToken())
      if (isError) {
        const data = response.response
        if (data.status === 401) {
          setWereCredentialsDenied(true)
          console.log('denied')
        }
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Flex
      variant="content.normal"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      {wereCredentialsDenied && (
        <Alert isError={true}>
          Your email or password were incorrect. Please try again.
        </Alert>
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
        <Label htmlFor="email" color="base800" variant="text.body.small">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email?.type === 'required' && (
          <FormFieldError>Email is required</FormFieldError>
        )}
        {errors.email?.type === 'pattern' && (
          <FormFieldError>Invalid email address</FormFieldError>
        )}
        <Label
          htmlFor="password"
          color="base800"
          mt={2}
          variant="text.body.small">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          ref={register({ required: true })}
        />
        {errors.password?.type === 'required' && (
          <FormFieldError>Password is required</FormFieldError>
        )}
        <Button mt={4} type="submit" variant="buttons.secondary">
          Login
        </Button>
      </Box>
    </Flex>
  )
}
