import { useDispatch, useSelector } from 'react-redux'
import { selectNameFilter, changeFilter } from '../../redux/selectors'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector(selectNameFilter)

  const handleSearch = (name) => {
    dispatch(changeFilter(name))
  }

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={filterValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox
