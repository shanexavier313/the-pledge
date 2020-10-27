import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'

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
            firstName: yup.string().required('First Name is required'),
            lastName: yup.string().required('Last Name is required'),
            email: yup
              .string()
              .required('Email is required')
              .email('Enter a valid email address'),
            password: yup.string().required('Password is required'),
            passwordCon: yup
              .string()
              .required('Password Confirmation is required')
              .oneOf([yup.ref('password')], 'Passwords must match'),
            takeThePledge: yup
              .boolean()
              .oneOf([true], 'This field must be checked'),
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
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                label="First Name"
                name="firstName"
                type="firstName"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                size="large"
              />
              <FormField
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                label="Last Name"
                name="lastName"
                type="lastName"
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                size="large"
              />
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
              <Box alignItems="center" display="flex" mt={2} ml={-1}>
                <Checkbox
                  checked={values.takeThePledge}
                  name="takeThePledge"
                  onChange={handleChange}
                />
                <Typography variant="body2" color="textSecondary">
                  I pledge to call 5 friends, family members, or acquaintances
                  (with a focus on swing states and people less likely to vote
                  for democrats) between now and November 3rd and to encourage
                  them to vote blue down ballot to get Trump and other
                  politicians who threaten our democracy and our future as a
                  nation out of office.
                </Typography>
              </Box>
              {Boolean(touched.takeThePledge && errors.takeThePledge) && (
                <FormHelperText error>{errors.takeThePledge}</FormHelperText>
              )}
              <Box mt={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained">
                  Take the Pledge
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
