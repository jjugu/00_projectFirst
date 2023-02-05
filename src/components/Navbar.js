import { NavLink } from 'react-router-dom';
import logoPic from '../img/logoPic.png';

function Navbar() {
    function onClickMain(e) {
        window.location.href="/main"
    }

    return(
        <div style={coverageStyle}>
            <img src={logoPic} onClick={onClickMain} style={logoStyle}/>
            <ul>
            <p style={{fontSize:"35px", marginBottom:"30px"}}><NavLink to="/bestT" style={({ isActive }) => ({ color: isActive ? 'black' : 'black' })}>★t-shirt best goods</NavLink></p>
            <p style={{fontSize:"35px", marginBottom:"30px"}}><NavLink to="/bestP" style={({ isActive }) => ({ color: isActive ? 'black' : 'black' })}>★pants best goods</NavLink></p>
            <p style={{fontSize:"35px", marginBottom:"30px"}}><NavLink to="/tshirt" style={({ isActive }) => ({ color: isActive ? 'black' : 'black' })}>t-shirt item</NavLink></p>
            <p style={{fontSize:"35px", marginBottom:"30px"}}><NavLink to="/pants" style={({ isActive }) => ({ color: isActive ? 'black' : 'black' })}>pants item</NavLink></p>
            </ul>
        </div>
    );
}

const coverageStyle = {
    width: "400px",
    height: "auto",
    backgroundColor: "white",
    float: "left",
    marginRight: "30px"
}

const logoStyle = {
    backgroundColor: 'white',
    height: "400px",
    width: "400px",
    float: "left",
    marginBottom: "15px",
    cursor: "pointer"
}




export default Navbar;