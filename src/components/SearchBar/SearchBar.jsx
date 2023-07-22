import style from "./SearchBar.module.css"
import imageLogo from '../../assets/logoNav.png'
import { useState } from "react";


export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')

   const handlerEnter = (event) => {
      if(event.key === 'Enter') {
         onSearch(id)
         setId('')
      }
   }   
   
   const handleChange = (evento) => {
      setId(evento.target.value) 
   }


   return (
      <div className={style.container}>
         <img 
            src={imageLogo} 
            alt="logo rick and morty" 
            className={style.logo} 
         />
         <div className={style.containerInput}>
            <input 
            type='text' 
            placeholder="Search character..." 
            className={style.input}
            onChange= {handleChange}
            value={id}
            onKeyUp={handlerEnter}
            />
            <button onClick={()=> onSearch(id) } className={style.btn}>Add</button>
         </div>
      </div>
   );
}
