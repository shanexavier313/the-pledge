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
    // <Flex
    //   variant="content.normal"
    //   sx={{
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '100%',
    //   }}>
    //   <Box
    //     mt={4}
    //     mb={6}
    //     py={5}
    //     px={6}
    //     as="form"
    //     onSubmit={handleSubmit(onSubmit)}
    //     sx={{
    //       borderStyle: 'solid',
    //       borderWidth: '1px',
    //       borderColor: 'primary',
    //     }}>
    //     <FormField
    //       name="firstName"
    //       label="First Name"
    //       registerFn={register}
    //       error={errors.firstName}
    //     />
    //     <FormField
    //       name="lastName"
    //       label="Last Name"
    //       registerFn={register}
    //       error={errors.lastName}
    //     />
    //     <FormField
    //       name="email"
    //       label="Email"
    //       registerFn={register}
    //       error={errors.email}
    //     />
    //     <FormField
    //       name="password"
    //       label="Password"
    //       type="password"
    //       registerFn={register}
    //       error={errors.password}
    //     />
    //     <FormField
    //       name="passwordCon"
    //       label="Password Confirmation"
    //       type="password"
    //       registerFn={register}
    //       error={errors.passwordCon}
    //     />
    //     <Button mt={3} type="submit" variant="buttons.secondary">
    //       Sign Up
    //     </Button>
    //   </Box>
    // </Flex>
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
              <Box mt={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained">
                  Sign Up
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  )
}
