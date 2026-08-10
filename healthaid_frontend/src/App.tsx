import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/global.css';

function Home() {
  return <div style={{ padding: '2rem' }}><h1>HealthAid Landing Page (Placeholder)</h1></div>;
}

function Login() {
  return <div style={{ padding: '2rem' }}><h1>Login Page (Placeholder)</h1></div>;
}

function Register() {
  return <div style={{ padding: '2rem' }}><h1>Sign Up Page (Placeholder)</h1></div>;
}

function Dashboard() {
  return <div style={{ padding: '2rem' }}><h1>Dashboard Page (Placeholder)</h1></div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}