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
            type : 'divider'
        } ,
        {
            label : <Link href='/courses'>Courses</Link> ,
            key : 3
        } ,         {
            label : <Link href='/tutorials'>Tutorials</Link> ,
            key : 4
        } ,         {
            label : <Link href='/bestPractices'>Best Practices</Link> ,
            key : 5
        } ,         {
            label : <Link href='/certifications'>Certifications</Link> ,
            key : 6
        } ,
        {type : "divider"} ,
        {
            label : <Link href='/resources'>Resources</Link> ,
            key : 7
        } ,         {
            label : <Link href='/events'>Events</Link> ,
            key : 8
        } ,         {
            label : <Link href='/community'>Community</Link> ,
            key : 9
        } ,
    ]

    return (
        <Menu mode='inline' items={menuItems}></Menu>
    )
}

export default AppSideMenu;