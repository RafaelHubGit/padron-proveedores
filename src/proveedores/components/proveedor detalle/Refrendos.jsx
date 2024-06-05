import React, { useContext, useEffect, useState } from 'react'
import { ProveedoresContext } from '../../context/Proveedores/ProveedoresContext';
import { VisualizaProveedorComponent } from '../visualiza proveedor/VisualizaProveedorComponent';
import { SelectComponent } from '../../../generalComponents/selectPicker/SelectComponent';

export const Refrendos = () => {

  const { proveedor } = useContext( ProveedoresContext );

  const [refrendosSelect, setRefrendosSelect] = useState([]); //Llena el select con los refrendos del proveedor
  const [refrendo, setRefrendo] = useState(null);
  const [datoProveedor, setDatoProveedor] = useState(null);

  useEffect(() => {
    const refrendosSelect = proveedor?.DatosProveedores?.filter(dp => dp.activo == 0)
      .flatMap(dp => dp.Refrendo.map(r => ({
        value: r.idrefrendo,
        label: `No. Refrendo: ${r.numero_refrendo}`
      })));
    setRefrendosSelect(refrendosSelect);
    setRefrendo(refrendosSelect?.[0]?.value); // Set the initial value of refrendo
  }, [proveedor]);

  useEffect(() => {
    if (!refrendo) {
      return;
    }

    const refrendoF = proveedor?.DatosProveedores?.find(dp => dp.Refrendo.find(r => r.idrefrendo == refrendo));
    setDatoProveedor(refrendoF);
  }, [refrendo]);
  
  

  return (
    <div className='row mt-4'>

      <div className=' col-xs-12 col-sm-4'>
        <SelectComponent
            options={ refrendosSelect }
            initialValue = { refrendosSelect?.[0]?.value }
            title= "Refrendo"
            onSelect = { (selectedOption) => setRefrendo( selectedOption.value ) }
            // isDisabled = { proveedor?.activo == 0 ? true : false }
        />
      </div>

      <VisualizaProveedorComponent
        datosProveedor={ datoProveedor }
      />

    </div>
  )
}
