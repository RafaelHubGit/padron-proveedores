const API_BASE_URL = 'https://localhost:7174/api';


const ENDPOINTS = {
    SCROLLPROVEEDORES: (page, pageSize) => `${API_BASE_URL}/ProveedorController2/scroll?page=${page}&pageSize=${pageSize}`
};

export default ENDPOINTS ;