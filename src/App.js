import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import Store from './Components/Store';
import About from './Components/About';
import Cart from './Components/Cart';
import Categories from './Components/Categories';
import Admindash from './Components/Admindash';
import CreateCategory from './Components/CreateCategory';
import UpdateCatagory from './Components/UpdateCatagory';
import ViewCat from './Components/ViewCategory';
import ViewOrders from './Components/ViewOrders';
import EditProduct from './Components/EditProduct';
import CreateProduct from './Components/CreateProduct';
import OrderPlaced from './Components/OrderPlaced';
import EditImage from './Components/EditImage';

function App() {

 

  return (
   
    <div>
    <BrowserRouter>
    <ToastContainer position='top-center'/>
    <Routes>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>   
      <Route path="/categories/:categoryId" element={<Categories/>}/>
      <Route path='/createcategory' element={<CreateCategory/>}/>
      <Route path='/viewcat' element={<ViewCat/>}/>
      <Route path='/updatecategory/:categoryId' element={<UpdateCatagory/>}/>
      <Route path='/vieworders' element={<ViewOrders/>}/>
      <Route path='/editproduct/:productId' element={<EditProduct/>}/>
      <Route path='/createproduct/:categoryId' element={<CreateProduct/>}/>
      <Route path='/orderplaced/:orderId' element={<OrderPlaced/>}/>
      <Route path='admindash' element={<Admindash/>}/>
      <Route path='/editimage/:productId' element={<EditImage/>}/>

      {/*private routes*/}
      <Route path='user' element={<PrivateRoute/>}>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='cart' element={<Cart/>}/>
      </Route>
    
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
