import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import { Container, ContactForm, ContactList, SearchBox } from './components'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  )
}

export default App
