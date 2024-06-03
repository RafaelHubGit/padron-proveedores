const API_BASE_URL = 'https://localhost:7174/api';


const ENDPOINTS = {
    SCROLLPROVEEDORES: (page, pageSize) => `${API_BASE_URL}/ProveedorController2/scroll?page=${page}&pageSize=${pageSize}`,
    GETPROVEEDORDATA: ( numeroProveedor ) => `${API_BASE_URL}/ProveedorController2/proveedoresDatos?numeroProveedor=${numeroProveedor}`,
    GETGIROSCOMERCIALES: () => `${API_BASE_URL}/GirosComerciales`,
    ESTADOSPROVEEDORES: () => `${API_BASE_URL}/EstadosProveedores`,
    TYPESENSE: (query) => `${API_BASE_URL}/Typesense/search?query=${query}`
};

export default ENDPOINTS ;