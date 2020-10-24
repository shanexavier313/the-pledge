import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Link as RouterLink } from '@reach/router'
import { FormField } from 'components/form-field'

const FormContainer = styled.div`
  padding: 2rem;
  margin: 10rem 0;
  border: 1px solid rgb(240, 104, 47);
  @media only screen and (max-width: 800px) {
    margin: 2rem 0;
  }
  min-height: 100%;
  .actions {
    margin-top: 1rem;
  }
`
export const Ui = ({ onSubmit }) => {
  return (
    <Container maxWidth="sm">
      <FormContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
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
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                label="Email"
                name="email"
                type="email"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                size="large"
              />
              <Box my={1}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
