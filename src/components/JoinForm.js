import boxStyle from '../pages/Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callJoinAPI } from '../api/UserAPICalls';

function JoinForm() {

    const navigate = useNavigate();
    const [newUser, setNewUser] = useState(
        {   
            id:'',
            password:'',
            nickname:''
        }
    );

    /* 입력값 변경 시 이벤트(input에 타이핑 할 때마다 setState를 작동시켜서
       newUser 라는 state에 담길 값을 바꿔줌)  */
    const onChangeHandler = (e) => {
        setNewUser(
            {
                ...newUser,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 메인페이지로 가는 클릭 이벤트 */
    const onClickMoveToMain = () => {
        navigate('/');
    };

    /* 회원가입 버튼 클릭시 동작 */
    const onClickHandler = () => {

        /* db에 신규 사용자 정보 전달 */
        callJoinAPI(newUser);

        window.alert('회원가입이 완료되었습니다.');

        /* 회원가입이 완료되면 로그인 페이지로 */
        navigate('/login');

    }

    return (

        <div className={boxStyle.wrap}>
            <div className={boxStyle.joinbox}>
                <div className={boxStyle.upperLayer}>
                    <p className={boxStyle.welcomeWord}>Welcome to 배추신사</p>
                </div>
                <div className={boxStyle.inputLayer}>
                    <label>아이디 : </label>
                        <input type="text" name="id" placeholder="아이디" value={newUser.id} onChange={onChangeHandler}/><br/>
                    <label>비밀번호 : </label>
                        <input type="password" name="password" placeholder="비밀번호" value={newUser.password} onChange={onChangeHandler}/><br/>
                    <label>닉네임 : </label>
                        <input type="text" name="nickname" placeholder="닉네임" value={newUser.nickname} onChange={onChangeHandler}/><br/>
                        <button onClick={onClickHandler}>회원가입</button> <button onClick={onClickMoveToMain}>메인 페이지로</button>
                </div>
            </div>
        </div>
    );
}

export default JoinForm;