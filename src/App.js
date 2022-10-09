import logo from './logo.svg';
import Wrapper from './components/Wrapper';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Slider from './components/slide/Slide';
import Product from './components/product/Product';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Wrapper>
        <Product></Product>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
