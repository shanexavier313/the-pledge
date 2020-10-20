import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box, Flex } from 'theme-ui'
import styled from 'styled-components'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Alert } from '../../components/alert'
import { FormField } from '../../components/form-field'
import { CreateRecipient } from '../create-recipient';

const today = new Date()

const RecipientDialog = styled(Dialog)`
  && {
    & > div {
      padding: 0;
      form {
        padding: 0;
        padding-top: 3rem;
        padding-bottom: 3rem;
        margin: 0;
        border: none;
      }
    }
  }
`;
const callSchema = yup.object().shape({
  recipient: yup.string().required('Recipient is required'),
})

export const Ui = ({ onSubmit, errorState, recipients }) => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(callSchema),
  })
  const [modal, toggleModal] = useState(false);
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
        <Button mt={3} ml={1} variant="buttons.secondary" onClick={() => toggleModal(true)}>
          Add New Recipient
        </Button>
        <RecipientDialog
          onClose={() => toggleModal(false)}
          aria-labelledby="simple-dialog-title"
          open={modal}>
          <CreateRecipient toggleModal={toggleModal} />
        </RecipientDialog>
        
      </Box>
    </Flex>
  )
}
