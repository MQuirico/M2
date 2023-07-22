import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const { onSearch } = props
    return (
        <>
        <Link to="/home"> Home </Link> 
        <Link to="/about"> About </Link> 

            <SearchBar onSearch= {onSearch}/>
        </>
    )
}

export default Nav