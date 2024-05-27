const API_BASE_URL = 'https://localhost:7174/api';


const ENDPOINTS = {
    SCROLLPROVEEDORES: (page, pageSize) => `${API_BASE_URL}/ProveedorController2/scroll?page=${page}&pageSize=${pageSize}`,
    TYPESENSE: (query) => `${API_BASE_URL}/Typesense/search?query=${query}`
};

export default ENDPOINTS ;