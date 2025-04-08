import React, { useState } from 'react';



const App = () => {
const [isim, setIsim] = useState("")
const [kart, setKart] = useState("")
const [cvv, setCvv] = useState("")
const [Ay, setAy] = useState("")
const [yil, setYil] = useState("")
const handleClick=() => {
  if (!isim || !kart || !cvv || !Ay || !yil ){
    alert(`
      Tum alanlar doldurulmadi.
    `);
  }
  else{
    alert(`
      Isim : ${isim}
      Kart numarasi : ${kart} 
      Ay: ${Ay} Yil : ${yil} 
      Guvenlik kodu ${cvv}
    `);
  }

};
  return (
    <div className='odemeSayfasi' >
      <h1>Odeme Bilgileri</h1>
      <p>Kredi karti bilgilerinizi giriniz.</p>
      <p>Kart Uzerindeki isim</p>
      <input type="text" 
      placeholder='Ahmet Yilmaz' 
      onChange={(e)=> setIsim(e.target.value)} 
      />
      <p>Kart Numarasi</p>
      <input type="text" 
      placeholder='0000 0000 0000 0000' 
      onChange={(e)=> setKart(e.target.value)} />
      <div className='tarih'>
      <h4>Ay</h4>
      <h4>Yil</h4>
      <h4>Guvenlik Kodu</h4>
      <select name="Ay" 
      id="ayAcilir" 
      onChange={(e)=>setAy(e.target.value) }> 
        <option >Seciniz</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select name="yil" 
      id="yilAcilir" 
      onChange={(e)=> setYil(e.target.value)}
      >
        <option >Seciniz</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select>
      <input type="text" 
      placeholder='123' 
      onChange={(e)=> setCvv(e.target.value)}/>
      <button onClick={handleClick}>Simdi Ode</button>
      </div>
     
    </div>
  )
}




export default App
