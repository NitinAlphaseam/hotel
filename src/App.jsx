import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Billing from "./pages/Billing"
import Login from "./pages/Login"
import PrivateRoute from "./Components/PrivateRoute"
import ProductForm from "./Components/ProductForm"
import ProductList from "./pages/ProductList"

function App() {


  return (

    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Protected Routes to protect access */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/billing" element={
        <PrivateRoute>
          <Billing />
        </PrivateRoute>
      } />

      <Route path="/Product" element={
        <PrivateRoute>
          <ProductForm />
          <ProductList />
        </PrivateRoute>
      } />


      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>

  )
}

export default App
