import Link from "next/link";
export default function Home(){
  return (
    <div className="main">
      <div>
        <h1>Sistema de votaciones</h1>
        <div className="separador">
          <div className="inicia_vot">
            <h2>Inicializar votación</h2>
            <Link className="link_inicia" href = "/crea">Votacion regular</Link>
          </div>
          <div className="unirse_vot">
            <h2>Unirse a votación</h2>
            <Link className="link_une" href = "/une">Unirse via link</Link>
          </div>
        </div>
      </div>
      <div className = "apartado1">
        <h2>Propósito</h2>
        <h4>
          este trabajo no busca hacer una página de votación más, si no busca
          resolver una problemática con respecto a los sufragantes que votan desde la ignorancia y/o poca seriedad.
          Esta solución se implementará en entregas posteriores conforme avance el curso :)
        </h4>
      </div>
      
    </div>
  )
}