import React from 'react'
import { useToolTip } from '../../hooks/useToolTip';
import { CardGeneral } from '../CardGeneral';
import Swal from 'sweetalert2';

export const TablaRepresentanteContactoComponent = ({ headers = [], body = [], title="",  classBody = "" }) => {

    useToolTip();
  
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

        <CardGeneral
            title={title}
        >
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>

                    <button type="button" className="btn btn-success">Nuevo</button>
                </div>
                <table className='table table-hover fixed_header'>
                <thead>
                    <tr>
                    {headers.map((h) => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
        
                <tbody style={classBody}>
                    {body?.map(b => (
                    <tr 
                        key={b.id} 
                        onDoubleClick={() => handleOption(b)}
                        className='cursor-pointer'
                        data-bs-toggle="tooltip" data-bs-placement="top" title={b.nota ? b.nota : ""}
                    >
                        <td>{b.detalle}</td>
                        <td>{b.tipo}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

        </CardGeneral>
    </div>
    );
}
