import React from 'react'
import Logo from '../../src/assets/Logo-Crosetto-w.png'
import '../css/header.css'

export default function header() {
  return (
    <div className='conteiner-fluid m-5'>
        <div id='headerCont' className='row'>
            <div className='col-3'>
                <a href="/"><img src={Logo} alt={Logo} id='Logo' /> </a>
            </div>
            <div className='col-9'>
                <h1 className='text-center'>Herramienta de dimensionamiento de almacenes</h1>
            </div>
        </div>
    </div>
  )
}
