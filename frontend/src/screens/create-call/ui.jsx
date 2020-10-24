import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import { Formik } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { CreateRecipient } from '../create-recipient'
import { FormField } from 'components/form-field'

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
`

const FormContainer = styled.div`
  padding: 2rem;
  margin: 10rem 0;
  border: 1px solid rgb(240, 104, 47);
  min-height: 100%;
  @media only screen and (max-width: 800px) {
    margin: 2rem 0;
  }
  .actions {
    margin-top: 1rem;
  }
`

export const Ui = ({ onSubmit, errorState, recipients }) => {
  const [modal, toggleModal] = useState(false)
  return (
    <Container maxWidth="sm">
      <FormContainer>
        <Formik
          initialValues={{
            date: '',
            recipient: '',
            notes: '',
          }}
          validationSchema={yup.object().shape({
            date: yup
              .date()
              .required('Date is required')
              .min(new Date(), "Can't schedule a call in the past")
              .max(new Date('11/3/2020'), 'Make sure you call before Nov 3rd!'),
            recipient: yup.string().required('Recipient is required'),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            const { error } = await onSubmit(values)
            if (error) {
              setStatus({ success: false })
              setErrors(error)
              setSubmitting(false)
            }
          }}>
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormField
                error={Boolean(touched.date && errors.date)}
                helperText={touched.date && errors.date}
                label="Date"
                name="date"
                type="date"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
              />
              <FormField
                error={Boolean(touched.recipient && errors.recipient)}
                helperText={touched.recipient && errors.recipient}
                label="Recipient"
                name="recipient"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                list={recipients}
              />
              <FormField
                error={Boolean(touched.notes && errors.notes)}
                helperText={touched.notes && errors.notes}
                label="Notes"
                name="notes"
                type="notes"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                rows={2}
              />
              <Grid container spacing={1} className="actions">
                <Grid item xs={6}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    type="submit"
                    variant="contained">
                    Create New Call
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    color="default"
                    fullWidth
                    onClick={() => toggleModal(true)}>
                    Add New Recipient
                  </Button>
                </Grid>
                <RecipientDialog
                  onClose={() => toggleModal(false)}
                  aria-labelledby="simple-dialog-title"
                  open={modal}>
                  <CreateRecipient toggleModal={toggleModal} />
                </RecipientDialog>
              </Grid>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
