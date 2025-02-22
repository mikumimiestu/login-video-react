import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

const Home = () => <div className="text-white text-center mt-20 text-2xl"></div>;

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Mulai dengan video dalam keadaan mute
      video.play(); // Memulai video secara otomatis

      // Mengaktifkan suara setelah 2 detik
      setTimeout(() => {
        if (video) {
          video.muted = false; // Aktifkan suara
        }
      }, 2000); // Sesuaikan waktu delay jika diperlukan
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
