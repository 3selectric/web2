import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Query } from './pages/Query';
import { Subscription } from './pages/Subscription';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { TestimonialSlider } from './components/TestimonialSlider';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="pt-16 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/query" element={<Query />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <footer className="bg-white dark:bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <TestimonialSlider />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;