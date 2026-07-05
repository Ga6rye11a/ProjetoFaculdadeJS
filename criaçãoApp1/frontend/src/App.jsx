import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './login/AuthProvider';
import { useAuth } from './login/AuthContext';
import Login from './login/Login';
import Home from './home/Home';
import ProtectedRoute from './login/ProtectedRoute';
import './index.css';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? '/home' : '/login'} />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
