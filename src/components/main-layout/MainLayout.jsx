import Header from '../header/Header'
import styles from './MainLayout.module.css'
const MainLayout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Header />
      <section className={styles.container}>{children}</section>
    </main>
  )
}

export default MainLayout
