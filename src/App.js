import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SliderPage from './pages/SliderPage';
import AccordianPage from './pages/AccordianPage';
import TabsPage from './pages/TabsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='/Form' exact element={<FormPage />}></Route>
        <Route path='/Slider' exact element={<SliderPage />}></Route>
        <Route path='/Accordian' exact element={<AccordianPage />}></Route>
        <Route path='/Tabs' exact element={<TabsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
