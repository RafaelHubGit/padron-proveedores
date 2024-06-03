import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../../context/General/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';
import InfiniteScroll from 'react-infinite-scroll-component';

import 'animate.css';

export const ProveedorTable = ({ proveedores = [], handleProveedorSelected, fetchMoreData, hasMore, pageSize = 10 }) => {
    const [tBodyHeight, setTBodyHeight] = useState(0)
    const [tHeadRef, tHeadHeight] = useDivHeight();
    const { heights } = useContext(GeneralContext);

    useEffect(() => {
        const { header, searchContainer } = heights
        setTBodyHeight((header + searchContainer + tHeadHeight));
    }, [heights, tHeadHeight])

    const handleRowClick = (proveedor) => {
        handleProveedorSelected(proveedor);
    };

    return (
        <div className='table-responsive'>
            <table className="table table-hover align-middle fixed_header">
                <thead ref={tHeadRef}>
                    <tr>
                        <th scope="col"># Proveedor</th>
                        <th scope="col">RFC</th>
                        <th scope="col">Razón Social</th>
                        <th scope="col">Activo</th>
                        {/* <th scope="col">Justificación</th> */}
                    </tr>
                </thead>
                <tbody id="scrollableTbody" className='table-group-divider' style={{ height: `calc(85vh - ${tBodyHeight}px)`, overflow: 'auto' }}>
                    <InfiniteScroll
                        dataLength={proveedores.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<tr><td colSpan="5">Cargando información...</td></tr>}
                        scrollableTarget="scrollableTbody"
                        endMessage={
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center' }}>
                                    <b>No hay mas que mostrar</b>
                                </td>
                            </tr>
                        }
                    >
                        {proveedores.map(p => (
                            <tr
                                // key={p.iddatosProveedores}
                                onDoubleClick={() => handleRowClick(p)}
                                style={{ cursor: 'pointer' }}
                                className="fadeIn"
                            >
                                <th scope="row"> {p.numeroProveedor} </th>
                                <td> {p.rfc} </td>
                                <td> {p.razonSocial} </td>
                                <td>
                                    {
                                        p.activo ?
                                            <span className="badge text-bg-success">Activo</span>
                                            :
                                            <span className="badge text-bg-danger">Inactivo</span>
                                    }
                                </td>
                                {/* <td>  </td> */}
                            </tr>
                        ))}
                    </InfiniteScroll>
                </tbody>
            </table>
        </div>
    )
}
