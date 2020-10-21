import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex } from 'theme-ui'
import { Typography } from '@material-ui/core'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Alert } from '../../components/alert'
import { FormField } from '../../components/form-field'
import { POLITICAL_LEANINGS, VOTER_STATUS, US_STATES } from 'domains/constants'

const signUpSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
})

export const Ui = ({ onSubmit, errorState, toggleModal = null }) => {
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
          label="First Name *"
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
          label="State Residence (if unknown or you rather not to say, you can this leave blank)"
          registerFn={register}
          list={US_STATES}
          error={errors.state_residence}
        />
        <FormField
          name="state_registered"
          label="State Registered (if unknown or you rather not to say, you can this leave blank)"
          registerFn={register}
          list={US_STATES}
          error={errors.state_registered}
        />
        <FormField
          name="registered_to_vote"
          label="Registered To Vote (if unknown or you rather not to say, you can this leave blank)"
          registerFn={register}
          list={VOTER_STATUS}
          error={errors.registered_to_vote}
        />
        <FormField
          name="political_leaning"
          label="Political Leaning (if unknown or you rather not to say, you can this leave blank)"
          registerFn={register}
          list={POLITICAL_LEANINGS}
          error={errors.political_leaning}
        />
        <Box px={2}>
          <Typography variant="subtitle2">
            <i>
              For your organizational purposes, we want to give you some options
              for categorizing your calls and your callees. Adding these details
              in is <strong>totally optional</strong>. We will only ever look at
              this information for aggregated, anonymized tracking of where The
              Pledge has spread.
            </i>
          </Typography>
        </Box>
        <Button mt={3} type="submit" variant="buttons.secondary">
          Create New Recipient
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
