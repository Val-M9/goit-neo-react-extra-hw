import LoginForm from '../../../components/login-form/LoginForm'
import styles from '../Auth.module.css'

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  )
}

export default LoginPage
