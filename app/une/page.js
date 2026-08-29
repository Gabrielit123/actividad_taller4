"use client";
import Link from "next/link";
import { useState} from "react";
export default function Une(){
  const [codigo, setCodigo] = useState("");

  const handleSubmit = () => {
    console.log("codigo ingresado:", codigo);
  }

  return (
    <div className = "cont_une">
      <h1>te unistee</h1>
      <h2>Ingresa el código de votación</h2>
      <input
        type = "text"
        value = {codigo}
        onChange = {(e) => setCodigo(e.target.value)}
        maxLength = {10}
      />
      <button onClick = {handleSubmit}>Ingresar</button>
      <Link className = "vuelve_une" href = "/">Volver a inicio</Link>
    </div>
  );
}

