import data from '../../data/data.json';

const getProveedores = () => {
    const Proveedores = data.Proveedores;

    const datosProveedores = Proveedores.map(limpiarProveedor);

    console.log(datosProveedores);

    return datosProveedores;
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

export { getProveedores };