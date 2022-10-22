import Wrapper from './components/Wrapper';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Detail from './components/DetailPage/Detail';
import { Route, Routes } from "react-router-dom";
import Product from './components/product/Product';
import Shopping from './components/shoppingPage/Shopping';
import CheckOut from './checkoutPage/CheckOut';
import Login from './loginPage/Login';
import ActionPage from './loginPage/ActionPage';
import Register from './loginPage/Register';
import ResetPassword from './loginPage/ResetPassword';
import './App.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/user' element={<ActionPage/>}>
            <Route index element={<Login/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Reset' element={<ResetPassword/>}/>
          </Route>
          <Route path='/Detail/:ProductId' element={<Detail/>}/>
          <Route path='/shopping' element={<Shopping/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
