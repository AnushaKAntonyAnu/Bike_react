import logo from './logo.svg';
import './App.css';
import AddProduct from './compononts/AddProduct';
import SearchProduct from './compononts/SearchProduct';
import DeleteProduct from './compononts/DeleteProduct';
import ViewallProduct from './compononts/ViewallProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddProduct/>}/>
    <Route path='/search' element={<SearchProduct/>}/>
    <Route path='/delete' element={<DeleteProduct/>}/>
    <Route path='/view' element={<ViewallProduct/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
