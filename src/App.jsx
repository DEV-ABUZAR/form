import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './Jobs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fileds from './Fileds';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/" element={<Fileds />} />
      </Routes>
    </Router>
  );
}

export default App;
