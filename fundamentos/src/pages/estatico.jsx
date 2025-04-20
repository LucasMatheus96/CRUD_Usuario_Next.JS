import Layout from "../components/Layout";

export default function Estatico(){
    return (
        <Layout titulo="Conteudo Estático">
            <div>{Math.random()}</div>
        </Layout>
        )
}