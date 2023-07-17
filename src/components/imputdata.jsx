import React, { useState, useEffect } from 'react';
import Almacen from '../assets/Almacen.jpg';
import cargaSup from '../assets/cargaSup.svg';
import '../css/imputdata.css';

export default function Imputdata() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = [];

    for (let i = 0; i < height + 1; i++) {
      const rowData = [];
      for (let j = 0; j < width; j++) {
        rowData.push(i * width + j + 1);
      }
      data.push(rowData);
    }

    setTableData(data);
    setShowModal(true);
  };

  const renderTable = () => {
    const middleRowIndex = Math.floor(height / 2);
    const topRows = tableData.slice(0, middleRowIndex);
    const bottomRows = tableData.slice(middleRowIndex + 1);

    return (
      <div>
        <div className="table-container">
          <table>
            <tbody>
              {topRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <img src={cargaSup} alt={cargaSup} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="transSup">
          <img src={'https://crosettowarehouser.com.ar/img/transSup.svg'} alt={'transSup'} />
        </div>

        <div className="table-container">
          <table>
            <tbody>
              {bottomRows.map((row, rowIndex) => (
                <tr key={rowIndex + middleRowIndex + 1}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <img src={cargaSup} alt={cargaSup} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="col-3 text-center" id='formulario'>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Cantidad de calles<br /> </label>
              <input
                type="number"
                className="form-control"
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))}
                max={26}
              /> <br /> 
            </div>
            <div className="form-group">
              <label>Cantidad de profundidades <br /> </label>
              <input
                type="number"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              /> <br /> 
            </div>
            <div className="form-group">
              <label>Ancho de Pallet<br /> </label>
              <input
                type="number"
                className="form-control"
                //value={width}
                //onChange={(e) => setWidth(parseInt(e.target.value))}
                max={26}
              /> <br /> 
            </div>
            <div className="form-group">
              <label>Profundidad de Pallet<br /> </label>
              <input
                type="number"
                className="form-control"
                //value={width}
                //onChange={(e) => setWidth(parseInt(e.target.value))}
                max={26}
              /> <br /> <br />
            </div>
            <button id='bottonsCalc' className='btn btn-primary' type="submit"><b>Generar tabla</b></button>
          </form>
        </div>
        <div className='col-6'>
          <img id='almacen' src={Almacen} alt={Almacen} width={910} height={500} />
        </div>
      </div>
        
      {/* Modal */}
      {showModal && (
        <div className="modal fade show modal-lg" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                {renderTable()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
