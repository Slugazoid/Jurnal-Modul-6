import './App.css'
import LabelHarga from "./components";
import Kategori from "./components";
import Panel from "./components";

function kartuNama({nama ,harga, kategori = "Makanan"}){
     return (
    <>
      <div className='Kartu'>
        <h1>{nama}</h1>
        <LabelHarga>{harga}</LabelHarga>
        <p>{kategori? "Bukan Makanan" : "Makanan"}</p>
      </div>
    </>
  )
}
export default App