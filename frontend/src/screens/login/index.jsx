import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex, Input, Label, Text } from 'theme-ui'
import { IdentityContext } from '../../domains/identity'

export const Login = () => {
  const { logIn } = useContext(IdentityContext)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await logIn(data.username, data.password)

      if (isError) {
        const data = response.response.data
        console.log(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Flex
      variant="content.normal"
      sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Box
        my={5}
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
        {errors.email && (
          <Text variant="text.body.small" color="secondary">
            This field has errors
          </Text>
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
        {errors.password && (
          <Text mb={4} variant="text.body.small" color="secondary">
            This field has errors
          </Text>
        )}
        <Button mt={4} type="submit" variant="buttons.secondary">
          Login
        </Button>
      </Box>
    </Flex>
  )
}
