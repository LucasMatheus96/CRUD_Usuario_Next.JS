import Link from "next/link";
import Navegador from "../components/Navegador";
export default function  Home() {
  return (
    <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      <Navegador texto = "Estiloso" destino ="/estiloso"/>
      <Navegador texto = "Exemplo" destino ="/exemplo"/>
      <Navegador texto = "jsx" destino ="/jsx" cor= "crimson"/>
      <Navegador texto = "Navegação #01" destino ="/navegacao" cor="green"/>
      <Navegador texto = "Navegação #02" destino ="/cliente/123" cor="blue"/>

    </div>
  );
}
