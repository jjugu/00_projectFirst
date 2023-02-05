import boxStyle from '../pages/Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../api/UserAPICalls';
import { resetLoginUser } from "../modules/UserModule";


function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setLoginInfo (
            {
                 ...loginInfo,
                [e.target.name]: e.target.value,
                
            }
        );
    } 


    /* 로그인 버튼 클릭 시 동작 */
    const onClickHandler = () => {

        /* loginInfo에 대한 유효성 검사 후 호출 */
        dispatch(callLoginAPI(loginInfo));

    }

    const mainClickHandler = () => {
        navigate('/');
    }

    const moveToJoin = () => {
        navigate('/join');
    }

        /* 로그인 후 성공 실패 동작 */
        useEffect(
            () => {
                
                if(result?.message) {
                    alert('아이디와 비밀번호를 확인해주세요');
                    setLoginInfo(
                        {
                            id : '',
                            password : ''
                        }
                    );
                    dispatch(resetLoginUser());    
                } else if(loginStatus){
                    navigate('/');
                } 
            }, // eslint-disable-next-line
            [result]
        );




    return (

       <div className={boxStyle.wrap}>
            <div className={boxStyle.loginbox}>
                <input 
                    type="text" 
                    className={boxStyle.idpw} 
                    name="id" 
                    placeholder="아이디"
                    value={loginInfo.id} 
                    onChange={onChangeHandler} 
                />
                <br/><br/>
                <input 
                    type="password" 
                    className={boxStyle.idpw} 
                    name="password"
                    placeholder="비밀번호"
                    value={loginInfo.password}
                    onChange={onChangeHandler} 
                />

                <br/><br/>

                <button id={boxStyle.loginButton} onClick={onClickHandler}>로그인</button>
                <br/>
                <input id={boxStyle.checkStyle} type="checkbox"></input>
                <label id={boxStyle.loginText}>자동 로그인</label>&nbsp;&nbsp;&nbsp;
                <label id={boxStyle.idpwfind}>아이디 찾기</label>&nbsp;&nbsp;&nbsp;
                <label id={boxStyle.idpwfind}>비밀번호 찾기</label>
                <br/><br/>
                <label id={boxStyle.text1}>가입만 해도 즉시 15% 할인</label>&nbsp;&nbsp;&nbsp;
                <button onClick={moveToJoin}>회원가입</button>&nbsp;&nbsp;
                <button onClick={mainClickHandler}>메인화면</button>
            </div>
        </div> 
    );
}

export default LoginForm;