import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import './styles/global.css';

function Login() {
  return <div style={{ padding: '2rem' }}><h1>Login Page (Placeholder)</h1></div>;
}

function Dashboard() {
  return <div style={{ padding: '2rem' }}><h1>Dashboard Page (Placeholder)</h1></div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}