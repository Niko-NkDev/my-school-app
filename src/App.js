import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
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
        <Footer />
      <BrowserRouter/>

    </div>
  );
}

export default App;
