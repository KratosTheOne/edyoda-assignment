import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Modules from './pages/Modules'
import Instructors from './pages/Instructors';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/modules"
            element={<Modules />}
          />
          <Route
            path="/instructors"
            element={<Instructors />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
