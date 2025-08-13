import { FaSpotify, FaFacebook, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsLoggedIn(true);
        if (rememberMe) {
          localStorage.setItem('isLoggedIn', 'true');
        }
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  // Check for saved login state on component mount
  useEffect(() => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 bg-gray-900"
        style={{
          backgroundImage: 'url(/Task-4-Leggera/assets/spotify-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: isLoggedIn ? 'none' : 'blur(4px)'
        }}
      >
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 text-xs">
          Background Image: {window.location.href}spotify-background.png
        </div>
      </div>
      
      {!isLoggedIn && (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md h-[590px] flex flex-col bg-black rounded-lg shadow-2xl overflow-hidden">
            <div className="p-10 text-center flex-1 flex flex-col">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <FaSpotify className="text-white text-4xl" />
                <span className="text-white text-3xl font-bold">Spotify</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-6">Music For Everyone</h1>
              
              <form className="space-y-4 flex-1 flex flex-col" onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email or username"
                      className="w-full pr-10 pl-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Password"
                      className="w-full pr-10 pl-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400" />
                      ) : (
                        <FaEye className="text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="remember-me" className="text-sm text-gray-400 cursor-pointer">
                      Remember me
                    </label>
                    <button 
                      type="button"
                      onClick={() => setRememberMe(!rememberMe)}
                      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                      style={{ backgroundColor: rememberMe ? '#1DB954' : '#4B5563' }}
                    >
                      <span 
                        className={`${
                          rememberMe ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </button>
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm mt-2">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-200 text-base mt-4"
                  >
                    LOG IN
                  </button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black text-gray-400">or</span>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    className="w-full flex items-center justify-center space-x-3 bg-[#1877F2] text-white font-bold py-2 px-4 rounded-full hover:bg-[#166FE5] transition-colors duration-200 text-base"
                  >
                    <FaFacebook className="text-white text-xl" />
                    <span>LOG IN WITH FACEBOOK</span>
                  </button>
                </div>
                
                <div className="mt-auto pt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    DONT HAVE AN ACCOUNT?{' '}
                    <a href="#" className="text-white hover:underline font-medium">
                      Sign up for Spotify
                    </a>
                  </p>
                </div>
              </form>
            </div>
            
            <div className="bg-black bg-opacity-50 px-6 pb-4 pt-0 -mt-2">
              <div className="flex justify-center space-x-12">
                <a href="#" className="text-xs text-white hover:underline font-medium">RESET PASSWORD</a>
                <a href="#" className="text-xs text-white hover:underline font-medium">SETTINGS</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;