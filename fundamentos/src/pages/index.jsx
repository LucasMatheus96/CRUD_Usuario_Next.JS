import Link from "next/link";
import Navegador from "../components/Navegador";
export default function  Home() {
  return (
    <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      <Navegador texto = "Estiloso" destino ="/estiloso"/>
      <Navegador texto = "Exemplo" destino ="/exemplo"/>
      <Navegador texto = "jsx" destino ="/jsx" cor= "crimson"/>


    </div>
  );
}
