import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(num1 + num2);

  const fillNums = () => {
    setNum1(Number(prompt())); 
    setNum2(Number(prompt()));
 //   setNum1(prompt());
//    setNum2(prompt());
  }

  const dividir = () => {
    if (num2 == 0) {
      setResult("No es posible dividir entre cero");
    } else {
      setResult(num1 / num2)
    }
  }

  return (
    <>
      <h1>Tarea de RH</h1>
      <div className='card'>
        <p>
          {num1}
        </p>
        <p>
          {num2}
        </p>
        <p>
          Resultado: {result}
        </p>
      </div>
      <div>
        <input onChange={(e) => setNum1(e.target.value)} />
        <input onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div className="card boxApp">
        <button onClick={() => setResult(num1 + num2)}>
          Sumar
        </button>
        <button onClick={() => setResult(num1 - num2)}>
          restar
        </button>
        <button onClick={() => setResult(num1 * num2)}>
          multiplicar
        </button>
        <button onClick={dividir}>
          Dividir
        </button>
      </div>
    </>
  )
}

export default App
