import { Navigate, Route, Routes } from "react-router-dom"
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
