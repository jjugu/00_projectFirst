import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menu from './pages/Menu';
import MenuDetails from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';
import Login from './pages/Login';
import Join from './pages/Join';
import Tshirt from './pages/Tshirt';
import Pants from './pages/Pants';
import Purchase from './pages/Purchase';
import BestTshirt from './pages/BestTshirt';
import BestPants from './pages/BestPants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="join" element={<Join/>}/>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="bestT" element={<BestTshirt/>}/>
          <Route path="bestP" element={<BestPants/>}/>
          <Route path="tshirt" element={<Tshirt/>}/>
          <Route path="pants" element={<Pants/>}/>
          <Route path="purchase" element={<Purchase/>}/>
          <Route path="menu">
            <Route index element={<Menu/>}/>
            <Route path=":menuCode" element={<MenuDetails/>}/>
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
