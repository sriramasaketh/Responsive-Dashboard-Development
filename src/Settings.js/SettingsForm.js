import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const SettingsForm = () => {
  const initialValues = {
    username: '',
    email: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  })

  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='settings-form'>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <Field type='text' id='username' name='username' />
          <ErrorMessage name='username' component='div' className='error' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component='div' className='error' />
        </div>

        <button type='submit'>Save</button>
      </Form>
    </Formik>
  )
}

export default SettingsForm
