import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { FormField } from 'components/form-field'

const FormContainer = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgb(240, 104, 47);
  min-height: 100%;
  .actions {
    margin-top: 1rem;
  }
`

export const Ui = ({ onSubmit, errorState }) => {
  return (
    <Container maxWidth="sm">
      <FormContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={yup.object().shape({
            password: yup.string().required('Password is required'),
            passwordCon: yup
              .string()
              .required('Password Confirmation is required')
              .oneOf([yup.ref('password')], 'Passwords must match'),
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
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                label="Password"
                name="password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                size="large"
                type="password"
              />
              <FormField
                error={Boolean(touched.passwordCon && errors.passwordCon)}
                helperText={touched.passwordCon && errors.passwordCon}
                label="Password Confirmation"
                name="passwordCon"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                size="large"
                type="password"
              />
              <Box mt={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained">
                  Reset
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
