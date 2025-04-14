

import './App.css'


let personagem = {
  nome: 'batman',
  poder: 'rico',
  altura: '1.80',
  peso: '46kg',
  salario: '10000000'
};
function App() {
  return (
    <>
    <h1>Nome: { personagem.nome }</h1>
    <h1>Poder: { personagem.poder }</h1>
    <h1>altura: { personagem.altura }</h1>
    <h1>peso: { personagem.peso }</h1>
    <h1>salario: { personagem.salario }</h1>
    </>
  )
}

export default App
