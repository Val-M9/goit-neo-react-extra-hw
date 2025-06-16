import { RegisterForm } from '../../../components'
import styles from '../Auth.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Sign Up</h2>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
