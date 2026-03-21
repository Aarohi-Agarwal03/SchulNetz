import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Mail, Lock } from 'lucide-react'; // install: npm i lucide-react

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await axios.post('http://localhost:4000/api/auth/login', {
                email,
                password,
            });

            const { token, user } = res.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            if (user.role === 'admin') {
                window.location.href = '/admin';
            } else {
                window.location.href = '/dashboard';
            }
        } catch (err) {
            setMessage(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="hidden md:flex flex-col justify-between bg-gray-100 p-10">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        SchulNetz ERP
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        College Management System
                    </p>
                </div>

                <div className="max-w-sm">
                    <h2 className="text-xl font-medium text-gray-800 mb-3">
                        Manage your campus digitally
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Attendance, results, student records, and administration —
                        all in one simple and secure platform.
                    </p>
                </div>

                {/* subtle visual */}
                <div className="h-40 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                        Illustration / Campus Image
                    </span>
                </div>
            </div>

            {/* RIGHT SIDE (LOGIN) */}
            <div className="flex items-center justify-center bg-white px-6">
                <div className="w-full max-w-sm">

                    <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                        Sign in
                    </h1>

                    {message && (
                        <p className="text-sm text-red-500 mb-4">
                            {message}
                        </p>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">

                        {/* EMAIL */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-xs text-gray-400 mt-6">
                        youremai@schulnetz.in / admin123
                    </p>
                </div>
            </div>
        </div>
    );
}

// Dashboards same as before
function AdminDashboard() {
    return <div className="p-6">Admin Dashboard</div>;
}

function GeneralDashboard() {
    return <div className="p-6">Dashboard</div>;
}

function MainApp() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/dashboard" element={<GeneralDashboard />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default MainApp;