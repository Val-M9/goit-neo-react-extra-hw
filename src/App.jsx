import { lazy, Suspense } from 'react'
import { MainLayout, ContactForm, ContactList, SearchBox } from './components'
import { Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'

function App() {
  const HomePage = lazy(() => import('./pages/home/HomePage'))
  const ContactsPage = lazy(() => import('./pages/contacts/ContactsPage'))
  const LoginPage = lazy(() => import('./pages/auth/login/LoginPage'))
  const RegisterPage = lazy(() => import('./pages/auth/register/RegisterPage'))

  return (
    <MainLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CONTACTS} element={<ContactsPage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
