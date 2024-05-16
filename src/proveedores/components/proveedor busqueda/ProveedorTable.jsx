import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../../context/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';

export const ProveedorTable = () => {

    const [tBodyHeight, setTBodyHeight] = useState( 0 )
    const [tHeadRef, tHeadHeight] = useDivHeight();
    // poner el tamaño del body tabla en la tabla con su respectivo calc 
    const { heights } = useContext( GeneralContext );

    useEffect(() => {
      const { header, searchContainer } = heights
      setTBodyHeight( ( header + searchContainer + tHeadHeight ) );

      console.log('el tamaño  : ', header, ', ', searchContainer, ', ', ', ', tHeadHeight, ' total : ', tBodyHeight);
    }, [heights, tHeadHeight])
    

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
                <tr >
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>ITF210513ABC</td>
                    <td>Inovaciones Tecnológicas Futuro S.A. de C.V.</td>
                    <td> <span className="badge text-bg-success">Activo</span>  </td>
                    <td> LA JUSTIFICACION DE SI ESTA O NO ESTA BLA BLA BLA BLA BLA BLA BLA BLA </td>
                </tr>

            </tbody>
        </table>

    </div>
  )
}
