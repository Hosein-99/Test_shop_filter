import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes , Route , Navigate } from 'react-router-dom';

//context
import ContextApi from './context/ContextApi';
import ProductsDetail from './components/shared/ProductsDetail';

//components
import Store from './components/Store';

function App() {
  return (
    <ContextApi>
      <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/products/:id" element={<ProductsDetail />} />          
          <Route path='*' element={<Navigate to='/' />} />        
      </Routes>
    </ContextApi>
  );
} 

export default App;
