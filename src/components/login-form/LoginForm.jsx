import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './LoginForm.module.css'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
})

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  }
  const dispatch = useDispatch()

  const emailId = useId()
  const passwordId = useId()

  const handleSubmit = (values, { resetForm }) => {
    const user = {
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
        <button type="submit" className={styles.loginBtn}>
          Login
        </button>
      </Form>
    </Formik>
  )
}

export default LoginForm
