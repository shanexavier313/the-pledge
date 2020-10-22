import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import { Typography } from '@material-ui/core'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { POLITICAL_LEANINGS, VOTER_STATUS, US_STATES } from 'domains/constants'
import { FormField } from 'components/form-field'

const FormContainer = styled.div`
  &.form {
    padding: 2rem;
    margin: 2rem 0;
    border: 1px solid rgb(240, 104, 47);
    min-height: 100%;
    .actions {
      margin-top: 1rem;
    }
  }
`

export const Ui = ({ onSubmit, errorState, toggleModal = null }) => {
  const helperDescription =
    "If you don't know or you'd rather not to say, you can this leave blank"
  return (
    <Container maxWidth="sm">
      <FormContainer className={!toggleModal && 'form'}>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            political_leaning: '',
            state_registered: '',
            state_residence: '',
            registered_to_vote: '',
          }}
          validationSchema={yup.object().shape({
            first_name: yup.string().required('First Name is required'),
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
                error={Boolean(touched.first_name && errors.first_name)}
                helperText={touched.first_name && errors.first_name}
                label="First Name"
                name="first_name"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
              />
              <FormField
                error={Boolean(touched.last_name && errors.last_name)}
                helperText={touched.last_name && errors.last_name}
                label="Last Name"
                name="last_name"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
              />
              <FormField
                error={Boolean(
                  touched.state_residence && errors.state_residence,
                )}
                helperText={touched.state_residence && errors.state_residence}
                label="State Residence"
                name="state_residence"
                handleBlur={handleBlur}
                handleChange={handleChange}
                list={US_STATES}
                description={helperDescription}
                values={values}
              />
              <FormField
                error={Boolean(
                  touched.state_registered && errors.state_registered,
                )}
                helperText={touched.state_registered && errors.state_registered}
                label="State Registered"
                name="state_registered"
                handleBlur={handleBlur}
                handleChange={handleChange}
                list={US_STATES}
                description={helperDescription}
                values={values}
              />

              <FormField
                error={Boolean(
                  touched.registered_to_vote && errors.registered_to_vote,
                )}
                helperText={
                  touched.registered_to_vote && errors.registered_to_vote
                }
                label="State Registered"
                name="registered_to_vote"
                handleBlur={handleBlur}
                handleChange={handleChange}
                list={VOTER_STATUS}
                description={helperDescription}
                values={values}
              />

              <FormField
                error={Boolean(
                  touched.political_leaning && errors.political_leaning,
                )}
                helperText={
                  touched.political_leaning && errors.political_leaning
                }
                label="Political Leaning"
                name="political_leaning"
                handleBlur={handleBlur}
                handleChange={handleChange}
                list={POLITICAL_LEANINGS}
                description={helperDescription}
                values={values}
              />

              <Typography variant="subtitle2">
                <i>
                  For your organizational purposes, we want to give you some
                  options for categorizing your calls and your callees. Adding
                  these details in is <strong>totally optional</strong>. We will
                  only ever look at this information for aggregated, anonymized
                  tracking of where The Pledge has spread.
                </i>
              </Typography>
              <br />
              <Grid container spacing={1}>
                <Grid item xs={toggleModal ? 6 : 12}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    type="submit"
                    variant="contained">
                    Create New Recipient
                  </Button>
                </Grid>
                <Grid item xs={toggleModal ? 6 : 0}>
                  {toggleModal && (
                    <Button
                      color="secondary"
                      fullWidth
                      onClick={() => toggleModal(false)}>
                      Close
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
