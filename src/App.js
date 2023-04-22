import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Modules from './pages/Modules'
import Instructors from './pages/Instructors';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
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
