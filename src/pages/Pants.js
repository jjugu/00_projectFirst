import {useEffect, useState} from 'react';
import {getMenuList} from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function Pants() {
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(getMenuList());             
        },
        []
    );

    return (
        <div className={boxStyle.cardContainer}>
            <h1 style={{textAlign: "center"}}>Pants item</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.filter(menu => menu.categoryName === "하의")
                .map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </div>
    );
}

export default Pants;
