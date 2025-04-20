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
      <Navegador texto = "Componente com Estado" destino ="/estado" cor="pink"/>
      <Navegador texto = "Integracao com API #01" destino ="/integracao_1" cor="#4259"/>
      <Navegador texto = "Conteudo Estatico" destino ="/estatico" cor="#000"/>


    </div>
  );
}
