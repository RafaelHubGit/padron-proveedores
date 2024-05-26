import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CardGeneral } from '../CardGeneral';
import { useToolTip } from '../../hooks/useToolTip';

export const TableDocumentsComponent = ({ headers = [], body = [], classBody = "" }) => {
  const [tieneDocumento, setTieneDocumento] = useState(true);

  useToolTip();

  const handleCheck = (event) => {
    setTieneDocumento(event.target.checked);
  };

  const handleOption = (document) => {
    Swal.fire({
      title: 'Selecciona una acción',
      text: `Que deseas hacer con ${document}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ver',
      cancelButtonText: 'Eliminar',
      customClass: {
        confirmButton: 'btn-view',
        cancelButton: 'btn-delete'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // View action
        console.log('View', document);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Delete action
        console.log('Delete', document);
      }
    });
  };

  return (
    <div className='table-documents-container'>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          checked={tieneDocumento}
          onChange={handleCheck}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Tiene Documentos
        </label>
      </div>

      <CardGeneral title="Documentos">
        {!tieneDocumento ? (
          <div className='d-flex justify-content-center align-items-center'>
            No hay información que mostrar
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-success">Nuevo</button>
            </div>
            <table className='table table-hover fixed_header'>
              <thead>
                <tr>
                  {headers.map((h) => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody className={classBody}>
                {body.map((b) => (
                  <tr
                    key={b.document}
                    onDoubleClick={() => handleOption(b.document)}
                    className='cursor-pointer'
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={b.nota ? b.nota : ""}
                  >
                    <td>{b.document}</td>
                    <td>{b.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardGeneral>
    </div>
  );
};
