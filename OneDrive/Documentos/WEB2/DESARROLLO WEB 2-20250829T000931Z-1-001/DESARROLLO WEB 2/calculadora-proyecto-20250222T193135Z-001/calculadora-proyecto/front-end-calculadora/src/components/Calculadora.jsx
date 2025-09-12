import { useState } from "react";
import '../styles/Calculadora.css';
import Resultado from "./Resultado";

function Calculadora() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [numeros, setNumeros] = useState(''); // Para asc/desc
    const [resultado, setResultado] = useState('');

    // Operaciones básicas
    function handleSubmit(e) {
        e.preventDefault();
        const operacion = e.target.value;
        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number1, number2 })
        })
            .then(res => res.json())
            .then(responseData => {
                setResultado(responseData.resultado);
            })
            .catch(() => setResultado("Error en la conexión"));
    }

    // Ascendente / Descendente
    function handleOrdenar(e) {
        e.preventDefault();
        const operacion = e.target.value;
        const lista = numeros.split(",").map(num => num.trim()); // Convertir en array
        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numeros: lista })
        })
            .then(res => res.json())
            .then(responseData => {
                setResultado(responseData.resultado);
            })
            .catch(() => setResultado("Error en la conexión"));
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>

            {/* Formulario operaciones básicas */}
            <form>
                <input type="text" className="number" placeholder="Número 1"
                    onChange={(e) => { setNumber1(e.target.value) }} /><br />
                <input type="text" className="number" placeholder="Número 2"
                    onChange={(e) => { setNumber2(e.target.value) }} /><br />
                <input type="submit" className="btnEnviar" value="sumar" onClick={handleSubmit} />
                <input type="submit" className="btnEnviar" value="restar" onClick={handleSubmit} />
                <input type="submit" className="btnEnviar" value="multiplicar" onClick={handleSubmit} />
                <input type="submit" className="btnEnviar" value="dividir" onClick={handleSubmit} />
            </form>

            <hr />

            {/* Formulario ordenar números */}
            <h1>Ordenar Números</h1>
            <input type="text" className="number" placeholder="Ej: 5,3,8,1"
                onChange={(e) => { setNumeros(e.target.value) }} /><br />
            <input type="submit" className="btnEnviar" value="ascendente" onClick={handleOrdenar} />
            <input type="submit" className="btnEnviar" value="descendente" onClick={handleOrdenar} />

            {/* Resultado */}
            <Resultado resultado={"El resultado es " + resultado} />
        </div>
    );
}

export default Calculadora;
