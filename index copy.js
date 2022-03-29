/*const titulo = document.createElement("h1");

titulo.innerHTML = "Esse titulo foi criado com JS";

container.appendChild(titulo);*/

const container = document.getElementById("app");

function Titulo(props) {
    return (
        <div>
            <h1> {props.texto} </h1>
            <h3> Esse titulo foi criado com React </h3>
        </div>
    );
}

function Titulos() {
    return(
        <div>
            <Titulo texto="Eu sou o primeiro Titulo"></Titulo>
            <Titulo texto="Eu venho depois do primeiro Titulo"></Titulo>
            <Titulo texto="Eu sou o ultimo Titulo"></Titulo>
        </div>
    );
}

ReactDOM.render(Titulos(), container);