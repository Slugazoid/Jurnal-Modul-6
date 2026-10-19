import './App.css'

function LabelHarga(props) {
  return (
    <>
      <div className='kartu'>
        <h3>Rp.{props.nilai.toLocaleString('id-ID')}</h3>
      </div>
    </>
  )
}
export default App