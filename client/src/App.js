import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusList from './pages/BusList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='buses' element={<BusList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
