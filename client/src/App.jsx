import { useState } from 'react';
import { FaServer, FaChartLine, FaBell, FaCheckCircle, FaExclamationTriangle, FaClock, FaGlobe, FaDatabase } from 'react-icons/fa';

// Theme configuration - edit these values to change the entire app's color scheme
const theme = {
  primary: '#082032',
  secondary: '#2C394B',
  tertiary: '#334756',
  accent: '#e31b23',
};

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.primary }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: theme.secondary }} className="px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaServer className="text-2xl" style={{ color: theme.accent }} />
          <span className="text-white font-bold text-xl">404 Heartbeat</span>
        </div>
        <div className="flex space-x-6">
          <a href="#features" className="text-white hover:opacity-80">Features</a>
          <a href="#pricing" className="text-white hover:opacity-80">Pricing</a>
          <a href="#docs" className="text-white hover:opacity-80">Documentation</a>
          <a href="#contact" className="text-white hover:opacity-80">Contact</a>
        </div>
        <div>
          <button 
            style={{ backgroundColor: theme.accent }} 
            className="px-4 py-2 rounded font-semibold text-white hover:opacity-90"
          >
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Keep Your Services <span style={{ color: theme.accent }}>Alive & Monitored</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Comprehensive API and website monitoring with instant alerts when your services go down.
          Track performance, uptime, and stay ahead of issues before they affect your users.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button 
            style={{ backgroundColor: theme.accent }} 
            className="px-6 py-3 rounded-lg font-bold text-white text-lg hover:opacity-90"
          >
            Start Free Trial
          </button>
          <button 
            style={{ backgroundColor: theme.tertiary }} 
            className="px-6 py-3 rounded-lg font-bold text-white text-lg hover:opacity-90"
          >
            Live Demo
          </button>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ backgroundColor: theme.tertiary }} className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-gray-300">Monitoring Accuracy</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">30s</div>
            <div className="text-gray-300">Alert Response Time</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">2500+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Powerful <span style={{ color: theme.accent }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaGlobe style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Global Monitoring</h3>
              </div>
              <p className="text-gray-300">
                Monitor your services from multiple locations worldwide to ensure consistent uptime for all your users.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaBell style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Instant Alerts</h3>
              </div>
              <p className="text-gray-300">
                Receive notifications via SMS, email, Slack, or webhook the moment your service experiences issues.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaChartLine style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Performance Analytics</h3>
              </div>
              <p className="text-gray-300">
                Detailed performance metrics and historical data to help you optimize and improve your services.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaCheckCircle style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Status Pages</h3>
              </div>
              <p className="text-gray-300">
                Public or private status pages to keep your team and users informed about your service status.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaExclamationTriangle style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Anomaly Detection</h3>
              </div>
              <p className="text-gray-300">
                AI-powered anomaly detection to identify unusual patterns before they become critical issues.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div 
              style={{ backgroundColor: theme.secondary }} 
              className="p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaDatabase style={{ color: theme.accent }} className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">API Testing</h3>
              </div>
              <p className="text-gray-300">
                Comprehensive API testing with request validation, response time monitoring, and payload verification.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section style={{ backgroundColor: theme.tertiary }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How <span style={{ color: theme.accent }}>404 Heartbeat</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div 
                style={{ backgroundColor: theme.secondary }} 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaServer style={{ color: theme.accent }} className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Set Up Monitoring</h3>
              <p className="text-gray-300">Add your endpoints, APIs, or websites. Configure check intervals and alert thresholds.</p>
            </div>
            
            <div className="text-center">
              <div 
                style={{ backgroundColor: theme.secondary }} 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaClock style={{ color: theme.accent }} className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Continuous Checks</h3>
              <p className="text-gray-300">We monitor your services 24/7 from multiple global locations to ensure reliability.</p>
            </div>
            
            <div className="text-center">
              <div 
                style={{ backgroundColor: theme.secondary }} 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaBell style={{ color: theme.accent }} className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Get Notified</h3>
              <p className="text-gray-300">Receive instant alerts when issues are detected. View detailed reports and analytics.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Simple, Transparent <span style={{ color: theme.accent }}>Pricing</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div 
              style={{ backgroundColor: theme.secondary, borderColor: theme.tertiary }} 
              className="p-6 rounded-lg border-2"
            >
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$29</span>
                <span className="text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 10 monitors
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 5-minute check intervals
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Email alerts
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 7-day data retention
                </li>
              </ul>
              <button 
                style={{ backgroundColor: theme.accent }} 
                className="w-full py-2 rounded font-semibold text-white hover:opacity-90"
              >
                Start Free Trial
              </button>
            </div>
            
            {/* Pro Plan */}
            <div 
              style={{ backgroundColor: theme.secondary, borderColor: theme.accent }} 
              className="p-6 rounded-lg border-2 transform scale-105"
            >
              <div 
                style={{ backgroundColor: theme.accent }} 
                className="px-3 py-1 rounded-full text-xs font-bold text-white inline-block mb-3"
              >
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$79</span>
                <span className="text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 50 monitors
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 1-minute check intervals
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Email, SMS, Slack alerts
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 30-day data retention
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> API access
                </li>
              </ul>
              <button 
                style={{ backgroundColor: theme.accent }} 
                className="w-full py-2 rounded font-semibold text-white hover:opacity-90"
              >
                Start Free Trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div 
              style={{ backgroundColor: theme.secondary, borderColor: theme.tertiary }} 
              className="p-6 rounded-lg border-2"
            >
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$199</span>
                <span className="text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Unlimited monitors
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 30-second check intervals
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> All alert channels
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> 1-year data retention
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Priority support
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Custom integrations
                </li>
              </ul>
              <button 
                style={{ backgroundColor: theme.accent }} 
                className="w-full py-2 rounded font-semibold text-white hover:opacity-90"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section style={{ backgroundColor: theme.secondary }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for the latest features, updates, and uptime monitoring tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg flex-grow max-w-md"
              required
            />
            <button 
              type="submit"
              style={{ backgroundColor: theme.accent }} 
              className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ backgroundColor: theme.primary }} className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaServer className="text-2xl" style={{ color: theme.accent }} />
              <span className="text-white font-bold text-xl">404 Heartbeat</span>
            </div>
            <p className="text-gray-400">
              Comprehensive monitoring solution for your APIs and websites.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 404 Heartbeat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}