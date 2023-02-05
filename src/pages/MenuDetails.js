import {useParams} from 'react-router-dom';
import {getMenuDetail} from '../api/MenuAPI';
import {useEffect, useState} from 'react';
import DressItem from './DressItem.module.css';
import {useNavigate} from 'react-router-dom';


function MenuDetails() {

    const {menuCode} = useParams();
    const navigate = useNavigate();
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        detail: {},
        imageCut:[]

    });

    useEffect(
        () => {
            setMenu(getMenuDetail(menuCode));
        },[]
    );

    const onClickPurchase = () => {
        navigate(`/purchase/`);
    };

    return (
        <div style={{width: "1800px"}}>           
            <img src={menu.detail.imageMain} className={DressItem.mainImg}/>
            
            <h1 className={DressItem.h1}>{menu.menuName}</h1> 
            <h2 className={DressItem.h2}>가격: {menu.menuPrice}</h2>
            <h3 className={DressItem.h3}>메뉴 종류: {menu.categoryName}</h3> 
            
            <div className={DressItem.la}>
            <label >색상선택 </label>
                    <select name="nation">
                        <option value="bl">블랙</option>
                        <option value="wh">화이트</option>
                        <option value="bl" selected>블루</option>
                        <option value="gr">그레이</option>
                    </select>
                    <br/>
            <label>사이즈 선택 </label>
                    <select name="nation">
                        <option value="s" >S</option>
                        <option value="m" selected>M</option>
                        <option value="l">L</option>                
                    </select>
                    <br/>
                    <button type="button" className={DressItem.button1}>장바구니</button>
                    <button type="button" onClick={onClickPurchase} className={DressItem.button2}>구매하기</button>        
                    </div>
                    
                    <div className={DressItem.ima}>
                    <h3>상세 이미지 컷</h3>   
                    {menu.imageCut.map(DetailImg => <img src={DetailImg} />)}
                </div>  
        </div>       
    );
}


export default MenuDetails;