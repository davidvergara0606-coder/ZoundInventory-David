import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


import Login from '../views/Login';
import AdminDashboard from '../views/Dashboard';
import BodegueroDashboard from '../views/DashboardBodega';
import CrearUsuario from '../views/CrearUsuario';
import PerfilUsuario from '../views/PerfilUsuario';
import Inventario from '../views/Inventario';
import InventarioCRUD from '../views/InventarioCRUD';
import ProductosCatalogo from '../views/ProductosCatalogo';
import Entradas from '../views/Entradas';
import Salidas from '../views/Salidas';
import AlertasStock from '../views/AlertasStock';
import Reportes from '../views/Reportes';


const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();


  if (!user) {
    return <Navigate to="/" replace />;
  }


  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to={user.role === 'admin' ? '/admin-dashboard' : '/bodeguero-dashboard'} replace />;
  }

  return children;
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />

        
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/crear-usuario" 
          element={
            <ProtectedRoute allowedRole="admin">
              <CrearUsuario />
            </ProtectedRoute>
          } 
        />

        
        <Route 
          path="/bodeguero-dashboard" 
          element={
            <ProtectedRoute allowedRole="bodeguero">
              <BodegueroDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/perfil-usuario" 
          element={
            <ProtectedRoute allowedRole="bodeguero">
              <PerfilUsuario />
            </ProtectedRoute>
          } 
        />

        
        <Route path="/inventario" element={<ProtectedRoute><Inventario /></ProtectedRoute>} />
        <Route path="/inventario-crud" element={<ProtectedRoute><InventarioCRUD /></ProtectedRoute>} />
        <Route path="/catalogo" element={<ProtectedRoute><ProductosCatalogo /></ProtectedRoute>} />
        <Route path="/entradas" element={<ProtectedRoute><Entradas /></ProtectedRoute>} />
        <Route path="/salidas" element={<ProtectedRoute><Salidas /></ProtectedRoute>} />
        <Route path="/alertas-stock" element={<ProtectedRoute><AlertasStock /></ProtectedRoute>} />
        <Route path="/reportes" element={<ProtectedRoute><Reportes /></ProtectedRoute>} />

        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};