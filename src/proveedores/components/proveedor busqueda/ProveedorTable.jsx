import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../../context/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';
import { useNavigate } from 'react-router-dom';

export const ProveedorTable = ({ proveedores=[] }) => {

    const navigate = useNavigate();
    const [tBodyHeight, setTBodyHeight] = useState( 0 )
    const [tHeadRef, tHeadHeight] = useDivHeight();
    // poner el tamaño del body tabla en la tabla con su respectivo calc 
    const { heights } = useContext( GeneralContext );

    useEffect(() => {
      const { header, searchContainer } = heights
      setTBodyHeight( ( header + searchContainer + tHeadHeight ) );

      console.log('el tamaño  : ', header, ', ', searchContainer, ', ', ', ', tHeadHeight, ' total : ', tBodyHeight);
    }, [heights, tHeadHeight])

    const handleRowClick = () => {
        navigate(`/home/detalle`);
    };
    

  return (
    <div className='table-responsive'>
        
        <table  className="table table-hover align-middle fixed_header" >
            <thead ref={tHeadRef}>
                <tr>
                    <th scope="col"># Proveedor</th>
                    <th scope="col">RFC</th>
                    <th scope="col">Razón Social</th>
                    <th scope="col">Activo</th>
                    <th scope="col">Justificación</th>
                </tr>
            </thead>
            <tbody className='table-group-divider' style={{ height: `calc(85vh - ${tBodyHeight}px)` }}>

                {

                    proveedores.map( p => {
                        return (
                            <tr
                                onDoubleClick={() => handleRowClick( p )}
                                style={{ cursor: 'pointer' }}
                            >
                                <th scope="row"> { p.numero_proveedor } </th>
                                <td> { p.rfc } </td>
                                <td> { p.razon_social } </td>
                                <td>
                                    {
                                        p.activo ? 
                                            <span className="badge text-bg-success">Activo</span> 
                                        :
                                            <span className="badge text-bg-danger">Inactivo</span> 
                                    } 
                                
                                </td>
                                <td>  </td>
                            </tr>
                        )
                    })

                }

            </tbody>
        </table>

    </div>
  )
}
