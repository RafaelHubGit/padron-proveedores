import { Navigate, Route, Routes } from "react-router-dom"
import { ProveedorInfo } from "../proveedores/components/proveedor detalle/ProveedorInfo"
import { Refrendos } from "../proveedores/components/proveedor detalle/Refrendos"
import { VisualizaProveedorComponent } from "../proveedores/components/visualiza proveedor/VisualizaProveedorComponent"

export const ProveedorDetalleRouter = () => {
  return (
    <>
        <Routes>
            <Route path="proveedorInfo" element={<ProveedorInfo />} />
            <Route path="VisualizaProveedorComponent" element={<VisualizaProveedorComponent />} />
            <Route path="refrendos" element={<Refrendos />} />
            <Route path="/" element={<Navigate replace to="proveedorInfo" />} />
        </Routes>
    </>
  )
}
