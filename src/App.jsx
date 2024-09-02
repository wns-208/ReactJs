import './App.css'

let alunos = [
  { nome: 'Savalo Horse', cursos: ["DS", "ADM"] },
  { nome: 'Miranata Filoxina', cursos: ["ADM", "MA"]}
];

function App() {

  return (
    <>
      {
        alunos.map((element) => (
          <div key={element.nome}>
             { element.nome }
             {
               element.cursos.map((curso) => (
                <h1 key={curso}> {curso} </h1>
               ))
             }
          </div>
        ))
      }
    </>
  )
}

export default App
