import style from "./Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={style.container}>
         <button 
            onClick={()=> {onClose(id)}} 
            className={style.btn}>
               X
         </button>

         <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>
         

         <div className={style.containerTitle}>
            <h2> {species}</h2>
            <h2> {gender}</h2>
         </div>
         <img  src={image} alt={name} className={style.image} />
      </div>
   );
}

