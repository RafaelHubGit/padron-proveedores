import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HomePage } from "../proveedores/pages/HomePage"
import { ProveedorInfo } from "../proveedores/components/proveedor detalle/ProveedorInfo"
import { Refrendos } from "../proveedores/components/proveedor detalle/Refrendos"

export const ProveedorDetalleRouter = () => {
  return (
    <>
        <Routes>
            <Route path="proveedorInfo" element={<ProveedorInfo />} />
            <Route path="refrendos" element={<Refrendos />} />
            <Route path="/" element={<Navigate to="proveedorInfo" />} />
        </Routes>
    </>
  )
}
