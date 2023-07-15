import React from 'react'
import almacenSimple from '../assets/almacenSimple.jpg'
import almacenMulti from '../assets/AlmacenMultiProf.webp'
import '../css/posiblechoice.css'

export default function Posiblechoice() {
  return (
    <div className='container-fluid'>
        <h4> Selecciona la opción que deseas simular</h4>
        <div className='row m-4 justify-content-center text-center'>
            <div className='col-6'>
             <a href="/"><figure><img src={almacenSimple} alt={almacenSimple} width={545} height={318} id='optionIMG' /><figcaption><h3>Almacen simple o doble</h3></figcaption></figure></a>
            </div>
            <div className='col-6'>
                <a href="/"><figure><img src={almacenMulti} alt={almacenMulti} width={545} height={318} id='optionIMG' /><figcaption><h3>Almacen de multiple profundidad</h3></figcaption></figure></a>
            </div>
        </div>
    </div>
  )
}
