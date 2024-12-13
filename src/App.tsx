import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Query } from './pages/Query';
import { Subscriptions } from './pages/Subscriptions';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { TestimonialSlider } from './components/TestimonialSlider';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/query" element={<Query />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <TestimonialSlider />
      </div>
    </Router>
  );
}

export default App;