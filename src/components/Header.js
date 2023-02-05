import searchButton from '../img/searchButton.png';
import {NavLink, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {resetLoginUser} from "../modules/UserModule";


function Header({nickname}) {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const loginStatus = !!localStorage.getItem('isLogin');
    const dispatch = useDispatch();

    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    };

    const onClickMoveToJoin = () => {
        navigate('/join');
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userNickname');
        dispatch(resetLoginUser());
        navigate('/');
    }



    return (
        <div style={style}>
            <div style={totalStyle}>
                <form>
                    <label style={labelStyle}></label>
                    <input type="search" name="menuName" placeholder="검색할 내용입력" onChange={(e) => {setSearchValue(e.target.value)}} style={serachStyle} />
                    <button onClick={onClickHandler} style={{border:"none", outline:"none", backgroundColor:"transparent"}}>
                        <img src={searchButton} style={searchButtonStyle} />
                    </button>
                </form>
            </div>
            <p style={joinStyle} onClick={onClickMoveToJoin}>회원가입</p> 
            <p style={between}>ㅣ</p>
            {
                !loginStatus ? (
                        <button style={loginStyle}><NavLink to='/login'>로그인</NavLink></button>
                    ) : (
                        <button style={loginStyle} onClick={ logoutHandler }><a href="">로그아웃</a></button>
                    )
                }
        </div>
    );
}

const style = {
    height: "150px",
    overFlow:"auto",
    width: "1800px"
}

const totalStyle = {
    float: "left",
    marginTop:"30px"
}

const labelStyle = {
    fontSize: "40px",
    marginLeft: "300px",
    float: "left",
    marginTop:"20px"
    
}

const serachStyle = {
    width: "300px",
    height: "50px",
    marginLeft: "15px",
    float: "left",
    marginTop:"22px"
}

const searchButtonStyle = {
    width: "43px",
    height: "43px",
    marginTop: "24px",
    marginLeft: "1px",
    cursor: "pointer",
}

const loginStyle = {
    marginTop: "74px",
    marginRight: "5px",
    marginBottom: "10px",
    float: "right",
    cursor: "pointer",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    fontWeight: "bolder",
    fontSize: "16px"
}

const between = {
    fontWeight: "bolder",
    fontSize: "16px",
    float: "right",
    marginTop: "74px"
}

const joinStyle = {
    marginLeft: "5px",
    marginRight: "100px",
    marginBottom: "10px",
    marginTop:"74px",
    float: "right",
    cursor: "pointer",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    fontWeight: "bolder",
    fontSize: "16px"
}

export default Header;