import { ContactForm, SearchBox, ContactList } from '../../components'

const ContactsPage = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  )
}

export default ContactsPage
