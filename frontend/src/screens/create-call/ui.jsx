import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex } from 'theme-ui'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Alert } from '../../components/alert'
import { FormField } from '../../components/form-field'

const today = new Date()

const callSchema = yup.object().shape({
  recipient: yup.string().required('Recipient is required'),
})

export const Ui = ({ onSubmit, errorState, recipients }) => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(callSchema),
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
          name="date"
          label="Date"
          registerFn={register}
          error={errors.date}
        />
        <FormField
          name="recipient"
          label="Recipient"
          registerFn={register}
          list={recipients}
          error={errors.recipient}
        />
        <FormField
          name="notes"
          label="Notes"
          registerFn={register}
          error={errors.notes}
          multiLine
        />
        <Button mt={3} type="submit" variant="buttons.secondary">
          Create New Call
        </Button>
      </Box>
    </Flex>
  )
}
