import Header from './components/header'
import './css/header.css';
import './css/clickedProductPage.css';
import './css/introblurb.css';
import './css/products.css';
import IntroBlurbWrap from './components/introblurbwrap.js';
import ProductTileWrap from './components/productdisplays/producttilewrap.js'

function App() {
  return (
    <div>
    <Header />
    <IntroBlurbWrap />
    <ProductTileWrap />
    </div>
   );
}

export default App;
