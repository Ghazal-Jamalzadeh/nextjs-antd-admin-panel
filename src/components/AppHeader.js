import React from 'react';
import {Header} from "antd/es/layout/layout";
import {RadarChartOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";

function AppHeader() {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
    return (
        <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between">
            <div className="flex items-center gap-2">
                <RadarChartOutlined className="text-3xl"/>
            <div>Academic</div>
            </div>
            <div className="flex items-center gap-2">
                <Avatar size={36} src='/profile.jpg'  />
                Ghazal
            </div>


        </Header>
    )
}

export default AppHeader;