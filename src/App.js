import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetail from './customer/components/ProductDetail/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
// import ProductCard from './customer/components/Product/ProductCard';
// import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
 
     { <Routes>
     


     {/* customer route setting */}
        <Route path='/*' element={<CustomerRoutes/>}></Route>

        {/* admin route setting */}

 
     </Routes> }

   
    </div>
  );
}

export default App;
