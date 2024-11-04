import React from 'react';
import {Menu} from "antd";
import Link from "next/link";

function AppSideMenu() {

    const menuItems = [
        {
            label : <Link href='/'>Home</Link> ,
            key : 1
        } ,
        {
            label : <Link href="/bookmarks">Bookmark</Link> ,
            key : 2
        } ,
        {
            label : <Link href='/courses'>Courses</Link> ,
            key : 3
        }
    ]

    return (
        <Menu mode='inline' items={menuItems}></Menu>
    )
}

export default AppSideMenu;