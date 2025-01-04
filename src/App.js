import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/shareds/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}

        </Routes>
  
      </BrowserRouter>


    </div>
  );
}

export default App;
