import { useState } from 'react'
import './App.css'
import KartuMenu from "./components";
import Panel from "./components";

// const NAMA_PANGGILAN = 'Albert'
// const N = 22

function App() {
  const number = 9;
  return (
    <>
      {/* <div>
        <h1 className='judul'>Kantin {NAMA_PANGGILAN}</h1>
        <p>{number < 12? 'Selamat Pagi': 'Selamat Siang'}</p>
        <p>Saldo Awal kartu kantin: Rp.{N*1000}</p>
        <button disabled>Bayar</button>
      </div> */}

      <Panel judul="Menu Hari ini">
        
      </Panel>
    </>
  )
}

export default App