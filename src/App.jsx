import Counter from './pages/Counter';
import Layout from './pages/Layout';
import ModalComponent from './pages/Modal';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <main>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='modal' element={<ModalComponent />} />
              <Route path='counter' element={<Counter />} />
              <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
