import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';
import Ngos from './pages/Ngos';
import Login from './pages/Login';
import AIAssistant from './components/AIAssistant';
import { AssistantIcon } from './components/Icons';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#2a2a4e] via-purple-900 to-teal-900 text-gray-100 font-['Poppins',_sans-serif]">
        <Navbar />
        <main className="px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/ngos" element={<Ngos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="p-4 bg-violet-500 text-white rounded-full shadow-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-violet-500 transition-transform transform hover:scale-110"
            aria-label="Open AI Assistant"
          >
            <AssistantIcon className="w-6 h-6" />
          </button>
        </div>

        <AIAssistant
          isOpen={isAiAssistantOpen}
          onClose={() => setIsAiAssistantOpen(false)}
          context={location.pathname}
        />
      </div>
    </AuthProvider>
  );
};

export default App;