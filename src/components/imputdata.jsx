import React from 'react'
import Almacen from '../assets/Almacen.jpg'
import '../css/imputdata.css'

export default function Imputdata() {
  return (

<div className='container-fluid' >
    <div className='row m-5'>
        <div className='col-3 text-center'>
            <h1>Dimensiones</h1>
                <div class="form-group justify-content-center">
                        <br />
                    <label>Largo Total  [L<sub>T</sub>]</label>
                        <input type="number" class="form-control" id="largo_m" placeholder="" value="50" data-index="1" />
                    </div>
                <div class="form-group colUno">
                    <label>Ancho [W<sub>T</sub>]</label>
                        <input type="number" class="form-control" id="ancho_m" placeholder="" value="14" data-index="2" />
                    </div>
                <div class="form-group colUno">
                    <label>Alto [h<sub>T</sub>]</label>
                        <input type="number" class="form-control" id="alto_m" placeholder="" value="18.00" data-index="3" />
                    </div>
                <div class="form-group colUno">
                    <label>Alto de Pallet [h<sub>p</sub>]</label>
                        <input type="number" class="form-control" id="altopallet_m" placeholder="" value="2.00" data-index="4" onfocusout="setPalletHeight('multi')" />
                    </div>
                <div class="buttonHolder colUno">
                    <button id='bottonsCalc' onclick="calcularMultiprof(5); dibujarVistaFrontal('modalSimu'); dibujarVistaSuperior('modalSimu')" type="#" class="btn btn-primary" data-index="5"><b>Calcular</b></button>
                </div>
            </div>
            
        <div className='col-3 text-center'>
            <h1>Unidades</h1>
                <div class="form-group colDos rw2">
                <br />
                    <label>Calles</label>
                        <input type="number" class="form-control" id="calles_m" placeholder="" value="1" data-index="6" />
                    </div>

                <div class="form-group colDos rw3">
                    <label>Profundidades</label>
                        <input type="number" class="form-control" id="profundidad_m" placeholder="" value="1" data-index="7" />
                    </div>
                <div class="form-group colDos rw4">
                    <label>Niveles</label>
                        <input type="number" class="form-control" id="niveles_m" placeholder="" value="1" data-index="8" />
                    </div>
                <div class="form-group colDos rw5">
                    <label>Posiciones Totales</label>
                        <input type="number" class="form-control" id="posiciones_m" placeholder="" value="1" readonly />
                    </div>

        <div class="buttonHolder colDos rw6">
            <button id='bottonsCalc' onclick="calcularDimensionesMultiprof(0); dibujarVistaFrontal('modalSimu'); dibujarVistaSuperior('modalSimu')" type="#" class="btn btn-primary" data-index="9"><b>Calcular</b></button>
        </div>
    </div>
        <div className='col-6 text-center'>
            <img id='almacen' src={Almacen} alt={Almacen} width={600} height={400} />
        </div>

    </div>
</div>
  )

}
