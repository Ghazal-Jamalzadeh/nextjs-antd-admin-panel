import localFont from "next/font/local";
import "./globals.css";
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {Layout} from "antd";
import AppHeader from "@/components/AppHeader";
import Sider from "antd/es/layout/Sider";
import AppSideMenu from "@/components/AppSideMenu";
import {Content} from "antd/es/layout/layout";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <AntdRegistry>
            <Layout>
                <AppHeader/>
                <Layout hasSider>

                    <Sider theme='light'
                           // className='fixed top-[64px] left-0 border-r border-[#f1f1f1]'
                        style={
                            {
                                position : 'fixed' ,
                                top : '64px' ,
                                left: 0 ,
                                borderRight : '1px solid #f1f1f1' ,
                                height : 'calc(100vh - 64px)' ,
                            }
                        }

                    >
                        <AppSideMenu/>
                    </Sider>

                    <Layout

                        style={{
                           marginLeft: '200px' ,
                        }}

                    >
                        <Content style={{
                            padding : '16px' ,
                            minHeight : 'calc(100vh - 64px)' ,
                        }}>
                        {children}

                        </Content>
                    </Layout>

                </Layout>

            </Layout>

        </AntdRegistry>
        </body>
        </html>
    );
}
