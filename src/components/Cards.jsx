import Card from './Card';
import styles from './Cards.module.css'
import characters from "../data.js"

export default function Cards(props) {
   return(
      <div class={styles.container}>
       {characters.map((i)=> {
         return (
            <Card
            id = {i.id}
            name = {i.name}
            species = {i.species}
            gender = {i.gender}
            image = {i.image}
            status = {i.status}
            origin = {i.origin.name}
            onClose = {i.onClose}
            />
            )}) 
       } 
      </div>
       )
       }
