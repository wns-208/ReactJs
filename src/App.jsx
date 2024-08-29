import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let usuario = 'Carlitos Tevez';
let veiculo = {
  marca: 'Wolksvagem',
  modelo: 'Gol',
  ano: 2013,
  cor: 'Preto',
  proprietario: {
    nome: 'Carlitos',
    endereco: {
      rua: 'Rua Quadrada',
      bairro: 'Centro',
      cidade: 'Iperó',
      UF: 'SP'
    },
    telefone: [
      '15-999999999',
      '15-999999988',
      '15-999999977'
    ]
  },
  fotos: [
    'http://...',
    'http://...',
    'http://...'
  ],
  thumbnail: {
    largura: 100,
    altura: 100,
    borda: '1px solid red',
  }
}

function App() {

  return (
    <>
      <div>
        <h1>Marca: { veiculo.marca }</h1>
        <h2>Modelo: { veiculo.modelo }</h2>
        <h2>Ano: { veiculo.ano }</h2>
        <h2>Cor: { veiculo.cor }</h2>
        <hr />
        <h2>Informações do Proprietário</h2>
        <h3>Nome: { veiculo.proprietario.nome }</h3>
        <h3>Rua: { veiculo.proprietario.endereco.rua }</h3>
        <h3>Bairro: { veiculo.proprietario.endereco.bairro }</h3>
        <h3>Cidade: { veiculo.proprietario.endereco.cidade } / { veiculo.proprietario.endereco.UF}</h3>
        <h3>Telefones:</h3>
        {
          veiculo.proprietario.telefone.map((numero) => (
            <div key={numero}>{ numero }</div>
          ))
        }

        <h3>Fotos:</h3>
        {
          veiculo.fotos.map((foto) => (
            <div key={foto}>
              <img 
                src={ foto }
                style={
                  {
                    width: veiculo.thumbnail.largura,
                    height: veiculo.thumbnail.altura,
                    border: veiculo.thumbnail.borda
                  }
                }
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
