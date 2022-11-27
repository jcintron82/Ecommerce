import Header from './components/header'
import './css/header.css';
import './css/clickedProductPage.css';
import './css/introblurb.css';
import './css/products.css';
import './css/userCart.css';
import IntroBlurbWrap from './components/introblurbwrap.js';
import ProductTileWrap from './components/productdisplays/producttilewrap.js'

function App() {
  return (
    <div>
    <Header />
    <div className='blurbAndTileWrap'>
    <IntroBlurbWrap />
    <ProductTileWrap />
    </div>
    </div>
   );
}

export default App;
