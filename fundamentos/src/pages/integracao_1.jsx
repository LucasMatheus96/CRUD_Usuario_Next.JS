import Layout from "../components/Layout"
import {useState} from "react"
export default function Integracao(){
    
const [codigo, setCodigo] = useState(1)  
const [cliente, setCliente] = useState({})


function obterCliente(){
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
    .then(resp =>resp.json())
    .then(dados => setCliente(dados))
    .catch(e => console.log(e))
}
   

    return(
        <Layout>
        <div>
            <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}></input>
            <button onClick={obterCliente}>Obter Cliente</button>
        </div>
        <ul>
            <li>Codigo:{cliente.id}</li>
            <li>Nome:{cliente.nome}</li>
            <li>Email:{cliente.email}</li>
        </ul>
        </Layout>
        
        
    )
}