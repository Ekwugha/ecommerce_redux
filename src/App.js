import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
