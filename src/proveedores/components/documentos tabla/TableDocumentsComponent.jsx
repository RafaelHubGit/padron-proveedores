import React from 'react'
import Swal from 'sweetalert2'

export const TableDocumentsComponent = ({ headers = [], body = [], classBody = "" }) => {

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
        <table className='table table-hover fixed_header'>
          <thead>
            <tr>
              {headers.map((h) => <th key={h}>{h}</th>)}
            </tr>
          </thead>
  
          <tbody style={classBody}>
            {body.map(b => (
              <tr 
                key={b.document} 
                onDoubleClick={() => handleOption(b.document)}
              >
                <td>{b.document}</td>
                <td>{b.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
