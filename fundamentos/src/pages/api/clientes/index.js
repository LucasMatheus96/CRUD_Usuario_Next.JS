export default function handler(req, res) {

    if(req.method === "GET"){
        handlerGET(req,res)
    }else{
        res.status(405).send('Método não permitido')
    }
    res.status(200).json({
        id:3,
        nome: 'Ana',
        idade: 29,
    })
}

function handlerGET(req,resp){
    resp.status(200).json({
        id:3,
        nome: 'Ana',
        idade: 29,
        
    })
}