import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';


export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // Se estiver autenticado, renderiza o conteúdo da rota (usando Outlet).
  // Caso contrário, redireciona para a página de login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}