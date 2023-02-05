import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';
import Lay from './Lay.module.css';

const nickname = localStorage.getItem('userNickname');

function Layout() {
    return (
      <div className={Lay.wrapper}>
        <div className={Lay.contentWrapper}>
            <Navbar/>
            <Header nickname={nickname} />
            <Outlet/>
        </div>
          <Footer/>
      </div>
    )
  }




export default Layout;