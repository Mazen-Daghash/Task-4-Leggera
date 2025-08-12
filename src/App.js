import { FaSpotify, FaFacebook, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  return (
    <div className="min-h-screen relative">
      {/* Background with blur effect */}
      <div 
        className="fixed inset-0 z-0 bg-gray-900"
        style={{
          backgroundImage: 'url(/assets/spotify-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(4px)',
          transform: 'scale(1.02)'
        }}
      >
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 text-xs">
          Background Image: {window.location.href}spotify-background.png
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md h-[590px] flex flex-col bg-black rounded-lg shadow-2xl overflow-hidden">
          <div className="p-10 text-center flex-1 flex flex-col">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FaSpotify className="text-white text-4xl" />
              <span className="text-white text-3xl font-bold">Spotify</span>
            </div>
            <br></br>
            <h1 className="text-3xl font-bold text-white mb-6">Music For Everyone</h1>
            
            <form className="space-y-4 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email or username"
                    className="w-full pr-10 pl-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-gray-400"
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
                    className="w-full pr-10 pl-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-gray-400"
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <label htmlFor="remember-me" className="text-sm text-gray-400 cursor-pointer">
                    Remember me
                  </label>
                  <button 
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      rememberMe ? 'bg-spotify-green' : 'bg-gray-700'
                    }`}
                  >
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <span 
                      className={`${
                        rememberMe ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </button>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-200 text-base"
                >
                  LOG IN
                </button>
                {/* Divider */}
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
    </div>
  );
}

export default App;
