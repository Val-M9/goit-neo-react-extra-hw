import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './RegisterForm.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be 3 symbols minimum')
    .max(50, 'Name should be 50 symbols or less')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Password should be at least 8 symbols')
    .required('Required'),
})

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  }
  const dispatch = useDispatch()

  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    }
    console.log(user)

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <Form className={styles.form}>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} name="name" className={styles.inputField} />
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={emailId}>Email</label>
        <Field id={emailId} name="email" className={styles.inputField} />
        <ErrorMessage name="email" component="span" className={styles.error} />
        <label htmlFor={passwordId}>Password</label>
        <Field id={passwordId} name="password" className={styles.inputField} />
        <ErrorMessage
          name="password"
          component="span"
          className={styles.error}
        />
        <button type="submit" className={styles.registerBtn}>
          Sigh Up
        </button>
      </Form>
    </Formik>
  )
}

export default RegisterForm
