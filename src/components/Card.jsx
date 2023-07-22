import React from "react";
import characters from "../data.js"
import styles from "./Card.module.css"

export default function Card(props) {
   const {id, name, status, species, gender, origin, image} = characters
   return (
      <div className={styles.container}>
         <button onClick={() => {window.alert('Emulamos que se cierra la card')}}>X</button>
         <h2>Nombre: {name} </h2>
         <h2>Especie:{species} </h2>
         <h2>Género: {gender} </h2>
         <h2>Origen: {origin} </h2>
         <h2>Estado: {status} </h2>
         <img src={image} alt={name} className={styles.myImage} />
      </div>
   );
}
