import { Navigate, Route, Routes } from "react-router-dom"
import { ProveedoresSearch } from "../proveedores/components/proveedor busqueda/ProveedoresSearch"
import { ProveedorDetalle } from "../proveedores/components/proveedor detalle/ProveedorDetalle"

export const SearchDetalleRouter = () => {
  return (
    <>
        <Routes>
            <Route path="busqueda" element={<ProveedoresSearch />} />
            <Route path="detalle/*" element={<ProveedorDetalle />} />
            <Route path="/" element={<Navigate to="busqueda" />} />
        </Routes>
    </>
  )
}
