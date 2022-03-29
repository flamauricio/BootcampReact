const container = document.getElementById("app");

function Votacao(props) {

    // let contador = 0;
    const [contador, setContador] = React.useState(0);

    function votarMais() {
        setContador(contador + 1);
    }

    function votarMenos() {
        setContador(contador - 1);
    }

    return(
        <div>
            <h3>{props.titulo}</h3>
            Votos: {contador} <br />
            <button onClick={votarMenos}>-</button>
            <button onClick={votarMais}>+</button>
        </div>
    );
}

function App () {
    return (
        <div> 
            <Votacao titulo="Cavaleiro das Trevas"/>
            <Votacao titulo="The Batman"/>
            <Votacao titulo="Batman Begins"/>
        </div>
    );
}


ReactDOM.render(App(), container);