import {useEffect, useState} from 'react';
import {getMenuList} from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function Main() {
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(getMenuList());             
        },
        []
    );

    return (
        <div className={boxStyle.cardContainer}>
            <h1 style={{textAlign: "center"}}>배추 신상품</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.filter(menu => menu.categoryName2 === "new")
                .map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
            <hr/>
            <h1 style={{textAlign: "center"}}>배추 베스트 상품</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.filter(menu => menu.categoryName2 === "best")
                .map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </div>
    );
}

export default Main;
