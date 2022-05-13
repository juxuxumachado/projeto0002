import { useState } from "react"

export default function init(){
    const [valor,setValor] = useState("")
    function alterarValor(){
        setValor(valor+'@')
    }
    return(
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <span>{valor}</span>
                <input type="Texto" value={valor} onChange={e=>setValor(e.target.value)}/>
                <button onClick={alterarValor}>Alterar</button>
        </div>
    )
}