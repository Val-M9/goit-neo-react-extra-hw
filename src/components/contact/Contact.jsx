import { useDispatch } from 'react-redux'
import { FaUser } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { deleteContact } from '../../redux/operations'
import styles from './Contact.module.css'

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.contact}>
          <FaUser />
          <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles.contact}>
          <FaPhone />
          <p className={styles.number}>{number}</p>
        </div>
      </div>

      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => {
          handleDeleteContact(id)
        }}>
        Delete
      </button>
    </div>
  )
}

export default Contact
