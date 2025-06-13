import { useSelector } from 'react-redux'
import {
  selectContactsError,
  selectContactsLoading,
  selectFilteredContacts,
} from '../../redux/contactsSlice.js'
import Contact from '../contact/Contact'
import Loader from '../loader/Loader'
import styles from './ContactList.module.css'

const ContactList = () => {
  const isLoading = useSelector(selectContactsLoading)
  const error = useSelector(selectContactsError)
  const contacts = useSelector(selectFilteredContacts)

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>
  }
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </>
  )
}

export default ContactList
