import data from '../../data/data.json';

const getProveedores = () => {
    const Proveedores = data.Proveedores;

    const datosProveedores = Proveedores.map(limpiarProveedor);

    return datosProveedores;
}

const getProveedorById = ( idProveedor ) => {
    const Proveedores = data.Proveedores;
    const proveedor = Proveedores.find( proveedor => proveedor.idProveedor === idProveedor );

    const datosProveedorActivo = proveedor.DatosProveedores.find( dp => dp.activo === 1 );

    const datosProveedor = {
        idProveedor: proveedor.idProveedor,
        numero_proveedor: proveedor.numero_proveedor,
        fecha_alta: proveedor.fecha_alta,
        tiene_documentos: proveedor.tiene_documentos,
        es_repse: proveedor.es_repse,
        tipo_proveedor: proveedor.tipo_proveedor,
        activo: proveedor.activo,
        usuario_registra: proveedor.usuario_registra,
        fecha_registro: proveedor.fecha_registro,

        datosProveedorActivo
        

      };
    
      const domicilio = proveedor.Domicilio[0];
      const contacto = proveedor.Contacto;
      const refrendo = proveedor.Refrendo[0];
      const girosComerciales = proveedor.GirosComerciales;
    
      return {
        proveedor: datosProveedor,
        domicilio,
        contacto,
        refrendo,
        girosComerciales,
      };
    
} 


function limpiarProveedor(proveedor) {
    // Excluir propiedades no deseadas de nivel superior
    const { DatosProveedores, ...datosBasicos } = proveedor;

    // Limpieza específica de DatosProveedores
    const datosLimpio = DatosProveedores.map(datos => {
        const { Contacto, Domicilio, Refrendo, GirosComerciales, ...datosPrincipales } = datos;
        return datosPrincipales;
    });

    return {
        ...datosBasicos,
        ...datosLimpio[0]
    };
}

export { getProveedores, getProveedorById };