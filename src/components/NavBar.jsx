import styles from "./navBar.module.css"
import SearchBar from "./SearchBar"

export default function navBar (){
    
    return (
        <div className={styles.div}>
        <SearchBar /> 
        <h1>Matias Quirico's Rick and Morty app</h1>
        </div>
    )
}