import './Welcome.css';

function Welcome({ nome = 'Michel', sobrenome = 'Vagner'}){
    return(
        <h1>Olá {nome} {sobrenome} seja bem vindo ao Pizza Mundo !</h1>
    )
}

export default Welcome;