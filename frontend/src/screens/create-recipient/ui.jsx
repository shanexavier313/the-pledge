import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex } from 'theme-ui'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Alert } from '../../components/alert'
import { FormField } from '../../components/form-field'
import { POLITICAL_LEANINGS, VOTER_STATUS, US_STATES } from 'domains/constants'

const signUpSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  state_residence: yup.string().required('State Residence is required'),
  state_registered: yup.string().required('State Registered is required'),
  registered_to_vote: yup.string().required('Registered To Vote is required'),
  political_leaning: yup.string().required('Political Leaning is required'),
})

export const Ui = ({ onSubmit, errorState }) => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(signUpSchema),
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
      {errorState.invalidInput && (
        <Alert isError={true}>Whoops. Looks like there are some errors.</Alert>
      )}
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
          name="first_name"
          label="First Name"
          registerFn={register}
          error={errors.first_name}
        />
        <FormField
          name="last_name"
          label="Last Name"
          registerFn={register}
          error={errors.last_name}
        />
        <FormField
          name="state_residence"
          label="State Residence"
          registerFn={register}
          list={US_STATES}
          error={errors.state_residence}
        />
        <FormField
          name="state_registered"
          label="State Registered"
          registerFn={register}
          list={US_STATES}
          error={errors.state_registered}
        />
        <FormField
          name="registered_to_vote"
          label="Registered To Vote"
          registerFn={register}
          list={VOTER_STATUS}
          error={errors.registered_to_vote}
        />
        <FormField
          name="political_leaning"
          label="Political Leaning"
          registerFn={register}
          list={POLITICAL_LEANINGS}
          error={errors.political_leaning}
        />
        <Button mt={3} type="submit" variant="buttons.secondary">
          Create New Recipient
        </Button>
      </Box>
    </Flex>
  )
}
