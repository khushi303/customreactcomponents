import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SliderPage from './pages/SliderPage';
import AccordionPage from './pages/AccordianPage';
import TabsPage from './pages/TabsPage';
import DashboardHeader from './components/DashboardHeader';

function App() {
  return (
    <div className='bg-[#F5F5F5] max-w-[1920px] mx-auto relative'>
      
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='/Form' exact element={<FormPage />}></Route>
        <Route path='/Slider' exact element={<SliderPage />}></Route>
        <Route path='/Accordion' exact element={<AccordionPage />}></Route>
        <Route path='/Tabs' exact element={<TabsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
