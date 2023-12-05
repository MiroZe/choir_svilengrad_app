
import Form from 'react-bootstrap/Form';
import styles from './SerachBar.module.css'



const SearchBar = ({updateSearchValue, searchValue}) => {




return (
    <Form.Control className={styles['form-control']}type="text" 
    placeholder="Search by name" name='search'
     value={searchValue}
     onChange={(e) => updateSearchValue(e.target.value)}

     />
)

    
}

export default SearchBar