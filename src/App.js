import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [linea1,setlinea1] =  useState('');
  const [linea2,setlinea2] =  useState('');
  const [imagen,setimagen] =  useState('');

  const onChangelinea1 = function(evento) {
   
    setlinea1(evento.target.value)
  }
  const onChangelinea2 = function(evento) {
   
    setlinea2(evento.target.value)
  }
  const onChangeimagen = function(evento) {
   
    setimagen(evento.target.value)
  }
  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
   
  }




  return (
    <div className="App">
    
    //selector de imagenes
  
  <select onChange={onChangeimagen}>
    <option value="twice" >imagen </option>
    <option value="gidle">imagen </option>
    <option value="itzy">imagen </option>
    <option value="bvndit" >imagen </option>
  </select>

    //input text 1

    <input onChange={onChangelinea1}
     type="text"></input>
    <input  onChange={onChangelinea2} type="text"></input>
    <button onClick={onClickExportar}>exportar</button>
    //input text 2

  <div className='meme'>
    <span>{linea1}</span> <br/ >
    <span>{linea2}</span>
    <img src={"/img/"+ imagen + ".jpg"}></img>
    
    </div> 
    </div>
  );
}

export default App;
