import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import Starfield from './Starfield';

function App() {
  return (
    <div>
      <Starfield/>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;

