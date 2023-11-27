import ShopItemFunc from './components/ShopItemFunc';
import PropTypes from 'prop-types'
import './CSS/main.css';
import Product from './Product';

function App() {
  const item = new Product('Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£')
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
  );
}

App.propTypes= {item:PropTypes.instanceOf(Product).isRequired}

export default App;
