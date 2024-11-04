"use client" ;
import React, {useEffect} from 'react';
import {Menu} from "antd";
import Link from "next/link";
import {usePathname} from "next/navigation";

function AppSideMenu() {

    const pathName = usePathname()
    const [selectedKey, setSelectedKey] = React.useState();

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

    useEffect( ()=>{
        if(pathName.startsWith('/bookmarks')){
            setSelectedKey("2")
        }else if(pathName.startsWith('/courses')){
            setSelectedKey("3")
        }else if(pathName.startsWith('/tutorials')){
            setSelectedKey("4")
        }else if(pathName.startsWith('/bestPractices')){
            setSelectedKey("5")
        }else if(pathName.startsWith('/certifications')){
            setSelectedKey("6")
        }else if(pathName.startsWith('/resources')){
            setSelectedKey("6")
        }else if(pathName.startsWith('/bookmarks')){
            setSelectedKey("7")
        }else if(pathName.startsWith('/events')){
            setSelectedKey("8")
        }else if(pathName.startsWith('/community')){
            setSelectedKey("9")
        }else if(pathName === '/'){
            setSelectedKey('1')
        }
    } , [pathName])

    return (
        <Menu mode='inline' items={menuItems} selectedKeys = {selectedKey}></Menu>
    )
}

export default AppSideMenu;