import {useSearchParams} from 'react-router-dom';
import { searchMenu } from '../api/MenuAPI';
import {useEffect, useState} from 'react';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function MenuSearchResult () {

    const[searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));              
        }, []
    );

    return (
        <>
            <h1 style={{textAlign: "center"}}>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default MenuSearchResult;