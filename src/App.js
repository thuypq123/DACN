import Wrapper from './components/Wrapper';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Detail from './components/DetailPage/Detail';
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Product from './components/product/Product';
import Shopping from './components/shoppingPage/Shopping';
import CheckOut from './components/checkoutPage/CheckOut';
import Login from './components/loginPage/Login';
import ActionPage from './components/loginPage/ActionPage';
import Register from './components/loginPage/Register';
import ResetPassword from './components/loginPage/ResetPassword';
import Verify from './components/verifyPage/Verify';
import Forgot from './components/loginPage/Forgot';
import ProfilePage from './components/profilePage/profilePage';
import SuccessPage from './components/checkoutPage/SuccessPage';
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import './App.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/' element={<ActionPage/>}>
            <Route index element={<Login/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Reset' element={<ResetPassword/>}/>
          </Route>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/Detail/:ProductId' element={<Detail/>}/>
          <Route path='/shopping' element={<Shopping/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
        </Routes>
        {window.location.pathname !== '/verify' && window.location.pathname !== '/forgot' && <Footer />}
    </>
  );
}

export default App;
